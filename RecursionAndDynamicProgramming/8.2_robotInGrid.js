import { Queue } from "../StacksAndQueuesQuestions/Queue.js";

const testGrid = `
..-...
......
.-..-.
-....-
...-..
--....
..-...
`;

const testGrid2 = `
......
......
......
......
......
......
......
`;

const testGrid3 = `
......
......
......
.--...
..--..
...--.
....-.
`;

function readGrid(grid) {
  const stringMatrix = grid
    .trim()
    .split("\n")
    .map((square) => [...square]);

  return stringMatrix.map((row) => row.map((square) => square === "."));
}

function traverseDownOrRight(
  grid,
  coordinate,
  endCoordinates,
  mapOfPaths,
  newCoordinate
) {
  if (!mapOfPaths.has(newCoordinate.toString())) {
    const newPath = [].concat(mapOfPaths.get(coordinate.toString()));
    newPath.push(newCoordinate);
    mapOfPaths.set(newCoordinate.toString(), newPath);

    const finalPath = traverseGridDepthFirst(
      grid,
      newCoordinate,
      endCoordinates,
      mapOfPaths
    );

    return finalPath;
  }
  return [];
}

function traverseGridDepthFirst(
  grid,
  coordinate = [0, 0],
  endCoordinates = [grid.length - 1, grid[0].length - 1],
  mapOfPaths = new Map()
) {
  if (grid.length === 0 || grid[0].length === 0 || grid[0][0] === false) {
    return [];
  }

  if (!mapOfPaths.has(coordinate.toString())) {
    mapOfPaths.set(coordinate.toString(), [coordinate]);
  }

  if (coordinate.toString() === endCoordinates.toString()) {
    return mapOfPaths.get(coordinate.toString());
  }

  const canMoveDown =
    coordinate[0] + 1 < grid.length &&
    grid[coordinate[0] + 1][coordinate[1]] !== false;
  const canMoveRight =
    coordinate[1] + 1 < grid[0].length &&
    grid[coordinate[0]][coordinate[1] + 1] !== false;

  if (canMoveDown) {
    const newCoordinate = [coordinate[0] + 1, coordinate[1]];
    const finalPath = traverseDownOrRight(
      grid,
      coordinate,
      endCoordinates,
      mapOfPaths,
      newCoordinate
    );
    if (finalPath.length !== 0) {
      return finalPath;
    }
  }

  if (canMoveRight) {
    const newCoordinate = [coordinate[0], coordinate[1] + 1];
    const finalPath = traverseDownOrRight(
      grid,
      coordinate,
      endCoordinates,
      mapOfPaths,
      newCoordinate
    );
    if (finalPath.length !== 0) {
      return finalPath;
    }
  }

  return [];
}

function traverseDownOrRightBreadthFirst(
  mapOfPaths,
  workQueue,
  work,
  endCoordinates,
  newCoord
) {
  if (!mapOfPaths.has(newCoord.toString())) {
    const newPath = [].concat(mapOfPaths.get(work.toString()));
    newPath.push(newCoord);
    if (newCoord.toString() === endCoordinates.toString()) {
      return newPath;
    }
    mapOfPaths.set(newCoord.toString(), newPath);
    workQueue.add(newCoord);
  }
  return [];
}

function traverseGridBreadthFirst(grid) {
  if (grid.length === 0 || grid[0].length === 0 || grid[0][0] === false) {
    return [];
  }
  const endCoordinates = [grid.length - 1, grid[0].length - 1];
  const start = [0, 0];
  const mapOfPaths = new Map();

  if (endCoordinates.toString() === start.toString()) {
    return [start];
  }

  mapOfPaths.set(start.toString(), [start]);

  const workQueue = new Queue();
  workQueue.add(start);

  while (!workQueue.isEmpty()) {
    const work = workQueue.removeFirst();
    const canMoveDown =
      work[0] + 1 < grid.length && grid[work[0] + 1][work[1]] !== false;
    const canMoveRight =
      work[1] + 1 < grid[0].length && grid[work[0]][work[1] + 1] !== false;

    if (canMoveDown) {
      const downwardCoord = [work[0] + 1, work[1]];
      const finalPath = traverseDownOrRightBreadthFirst(
        mapOfPaths,
        workQueue,
        work,
        endCoordinates,
        downwardCoord
      );
      if (finalPath.length !== 0) {
        return finalPath;
      }
    }
    if (canMoveRight) {
      const rightwardCoord = [work[0], work[1] + 1];
      const finalPath = traverseDownOrRightBreadthFirst(
        mapOfPaths,
        workQueue,
        work,
        endCoordinates,
        rightwardCoord
      );
      if (finalPath.length !== 0) {
        return finalPath;
      }
    }
  }
  return [];
}

function printPathInGrid(grid, path) {
  const finalGrid = [];
  const stringPath = path.map((coord) => coord.toString());
  for (let i = 0; i < grid.length; ++i) {
    const row = [];
    for (let j = 0; j < grid[0].length; ++j) {
      let charToAdd = "";
      if (grid[i][j] === true) {
        charToAdd = ".";
      }
      if (grid[i][j] === false) {
        charToAdd = "-";
      }
      if (stringPath.includes([i, j].toString())) {
        charToAdd = "#";
      }
      row.push(charToAdd);
    }
    finalGrid.push(row);
  }
  return JSON.stringify(finalGrid);
}

const booleanGrid = readGrid(testGrid);
const depthFirstPath = traverseGridDepthFirst(booleanGrid);

console.log(depthFirstPath);
console.log(printPathInGrid(booleanGrid, depthFirstPath));

const breadthFirstPath = traverseGridBreadthFirst(booleanGrid);
console.log(breadthFirstPath);
console.log(printPathInGrid(booleanGrid, breadthFirstPath));