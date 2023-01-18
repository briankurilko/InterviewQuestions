function findDuplicatesAdjacencyList(paths) {
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

function searchPath(directory, path, mapOfContent) {
  if (directory == undefined) {
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

// ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
class Graph {
  constructor(paths) {
    this.nodes = new Map(); // this map will be flat...

    for (let path of paths) {
      const directories = path.substring(0, path.indexOf(" ")).split("/");
      const filesAndContent = path
        .substring(path.indexOf(" ") + 1)
        .split("/")
        .join("")
        .split(" ");
      const files = [];
      for (let fileAndContent of filesAndContent) {
        const split = fileAndContent.split("(");
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
          //   this.nodes.set(directories[i], newDirectory);
          currentDirectory = newDirectory;
        }
      }
      currentDirectory.addFiles(files);
    }
  }
}

// Wow, alright, great. This works. Leetcode accepted this answer. Took about 1 hour and 10 minutes.
// There has to be a million ways to optimize this solution alone.
console.log(
  findDuplicatesAdjacencyList([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ])
);
