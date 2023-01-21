function findDuplicatesGraph(paths) {
  const graph = new Graph(paths);
  const mapOfContent = new Map();
  for (let directory of [...graph.nodes.values()]) {
    searchPath(directory, directory.name, mapOfContent);
  }

  const duplicateFilesList = [];
  for (let files of [...mapOfContent.values()]) {
    if (files.length > 1) {
      duplicateFilesList.push(files);
    }
  }
  return duplicateFilesList;
}

function searchPath(directory, path, mapOfContent, visited = new Set()) {
  if (directory == undefined || visited.has(path)) {
    return;
  }
  for (let file of directory.files) {
    if (mapOfContent.has(file.content)) {
      mapOfContent.set(
        file.content,
        mapOfContent.get(file.content).concat(path + "/" + file.filename)
      );
    } else {
      mapOfContent.set(file.content, [path + "/" + file.filename]);
    }
  }
  for (let subDirectory of [...directory.children.values()]) {
    searchPath(subDirectory, path + "/" + subDirectory.name, mapOfContent);
  }
  visited.add(path);
}

class File {
  constructor(filename, content) {
    this.filename = filename;
    this.content = content;
  }
}

class Directory {
  constructor(dirName) {
    this.name = dirName;
    this.children = new Map();
    this.files = [];
  }

  addSubDirectory(dirname, directory) {
    this.children.set(dirname, directory);
  }

  addFiles(files) {
    this.files = files;
  }
}

class Graph {
  constructor(paths) {
    this.nodes = new Map();

    for (let path of paths) {
      const splitString = path.split(" ");
      const directories = splitString[0].split("/");
      const files = [];
      for (let i = 1; i < splitString.length; ++i) {
        const split = splitString[i].split("(");
        const fileName = split[0];
        const content = split[1];
        files.push(new File(fileName, content));
      }
      let topDirectory = this.nodes.has(directories[0])
        ? this.nodes.get(directories[0])
        : new Directory(directories[0]);
      this.nodes.set(directories[0], topDirectory);
      let currentDirectory = topDirectory;
      for (let i = 1; i < directories.length; ++i) {
        if (currentDirectory.children.has(directories[i])) {
          currentDirectory = currentDirectory.children.get(directories[i]);
        } else {
          const newDirectory = new Directory(directories[i]);
          currentDirectory.addSubDirectory(directories[i], newDirectory);
          currentDirectory = newDirectory;
        }
      }
      currentDirectory.addFiles(files);
    }
  }
}

// This is a good solution - I think it's important to remember what you're trying to end up with.
// In this case, you wanted a map of content to list of files. Next time try to come up with that just through string manipulation.
function findDuplicatesWithoutGraph(paths) {
  const contentMap = new Map();
  for (let path of paths) {
    const values = path.split(" ");
    for (let i = 1; i < values.length; ++i) {
      const fileAndContent = values[i].split("(");
      if (contentMap.has(fileAndContent[1])) {
        contentMap.set(
          fileAndContent[1],
          contentMap
            .get(fileAndContent[1])
            .concat(values[0] + "/" + fileAndContent[0])
        );
      } else {
        contentMap.set(fileAndContent[1], [
          values[0] + "/" + fileAndContent[0],
        ]);
      }
    }
  }
  const list = [];
  for (let files of [...contentMap.values()]) {
    if (files.length > 1) {
      list.push(files);
    }
  }
  return list;
}

// Wow, alright, great. This works. Leetcode accepted this answer. Took about 1 hour and 10 minutes.
// There has to be a million ways to optimize this solution alone.
console.log(
  findDuplicatesGraph([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ])
);

console.log(
  findDuplicatesWithoutGraph([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ])
);
