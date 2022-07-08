function rotateImage(image) {
  const rotatedImage = [];
  for (
    let orgXIndex = image.length - 1, rotYIndex = 0;
    rotYIndex <= image.length - 1;
    ++rotYIndex, --orgXIndex
  ) {
    for (let j = 0; j <= image[rotYIndex].length - 1; j++) {
      if (!rotatedImage[j]) {
        rotatedImage[j] = [];
      }
      rotatedImage[j][rotYIndex] = image[orgXIndex][j];
    }
  }
  return rotatedImage;
}

function rotateImageInPlace(image) {
  let index = 0,
    depth = 0,
    currentLength = image.length;
  while (index < currentLength + depth) {
    if (index == currentLength - 1 + depth) {
      index = depth + 1;
      currentLength = currentLength - 2;
      depth++;
    }

    if (currentLength == 0) {
      break;
    }
    const topLeft = image[depth][index];
    const topRight = image[index][image.length - 1 - depth];
    const bottomRight =
      image[image.length - 1 - depth][image.length - 1 - index];
    const bottomLeft = image[image.length - 1 - index][depth];
    image[depth][index] = bottomLeft;
    image[index][image.length - 1 - depth] = topLeft;
    image[image.length - 1 - depth][image.length - 1 - index] = topRight;
    image[image.length - 1 - index][depth] = bottomRight;

    index++;
  }

  return image;
}

function printStuff(corners) {
  console.log(corners);
}

function rotateImageInPlaceHelper(index, image) {
  swap(index, image.length, image);
  if (index < image.length - 1) {
    rotateImageInPlaceHelper(index + 1, image);
  }
}

function swapValues(value1, value2) {
  const temp = value1;
  value1 = value2;
  value2 = temp;
}

function swap(index, length, image) {
  const swap1 = image[index][length - 1 - index];
  const swap2 = image[length - 1 - index][length - 1 - index];
  const swap3 = image[length - 1 - index][index];
  const swap4 = image[index][index];
  image[index][length - 1 - index] = swap4;
  image[length - 1 - index][length - 1 - index] = swap1;
  image[length - 1 - index][index] = swap2;
  image[index][index] = swap3;
  console.log(swap4);
}

function swapOuter(index, length, image) {
  const swap1 = image[index][length - 1];
  const swap2 = image[length - 1][length - 1 - index];
  const swap3 = image[length - 1 - index][0];
  const swap4 = image[0][index];
  console.log(swap4);
  image[index][length - 1] = swap4;
  image[length - 1][length - 1 - index] = swap1;
  image[length - 1 - index][0] = swap2;
  image[0][index] = swap3;
}

console.log(
  JSON.stringify(
    rotateImageInPlace([
      ["a", "b", "c", "d"],
      ["e", "f", "g", "h"],
      ["i", "j", "k", "l"],
      ["m", "n", "o", "p"],
    ])
  ) ===
    JSON.stringify(
      rotateImage([
        ["a", "b", "c", "d"],
        ["e", "f", "g", "h"],
        ["i", "j", "k", "l"],
        ["m", "n", "o", "p"],
      ])
    )
);

console.log(
  JSON.stringify(
    rotateImageInPlace([
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "i", "j"],
      ["k", "l", "m", "n", "o"],
      ["p", "q", "r", "s", "t"],
      ["u", "v", "w", "x", "y"],
    ])
  ) ===
    JSON.stringify(
      rotateImage([
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "i", "j"],
        ["k", "l", "m", "n", "o"],
        ["p", "q", "r", "s", "t"],
        ["u", "v", "w", "x", "y"],
      ])
    )
);

console.log(
  JSON.stringify(
    rotateImageInPlace([
      ["a", "b", "c", "d", "e", "1"],
      ["f", "g", "h", "i", "j", "2"],
      ["k", "l", "m", "n", "o", "3"],
      ["p", "q", "r", "s", "t", "4"],
      ["u", "v", "w", "x", "y", "5"],
      ["6", "7", "8", "9", "10", "11"],
    ])
  ) ===
    JSON.stringify(
      rotateImage([
        ["a", "b", "c", "d", "e", "1"],
        ["f", "g", "h", "i", "j", "2"],
        ["k", "l", "m", "n", "o", "3"],
        ["p", "q", "r", "s", "t", "4"],
        ["u", "v", "w", "x", "y", "5"],
        ["6", "7", "8", "9", "10", "11"],
      ])
    )
);

console.log(
  JSON.stringify(
    rotateImageInPlace([
      ["a", "b", "c", "d", "e", "1", "12"],
      ["f", "g", "h", "i", "j", "2", "13"],
      ["k", "l", "m", "n", "o", "3", "14"],
      ["p", "q", "r", "s", "t", "4", "15"],
      ["u", "v", "w", "x", "y", "5", "16"],
      ["6", "7", "8", "9", "10", "11", "17"],
      ["18", "19", "20", "21", "22", "23", "24"],
    ])
  ) ===
    JSON.stringify(
      rotateImage([
        ["a", "b", "c", "d", "e", "1", "12"],
        ["f", "g", "h", "i", "j", "2", "13"],
        ["k", "l", "m", "n", "o", "3", "14"],
        ["p", "q", "r", "s", "t", "4", "15"],
        ["u", "v", "w", "x", "y", "5", "16"],
        ["6", "7", "8", "9", "10", "11", "17"],
        ["18", "19", "20", "21", "22", "23", "24"],
      ])
    )
);

console.log(
  JSON.stringify(
    rotateImageInPlace([
        ["a", "b", "c", "d", "e", "1", "12", "1", "30"],
        ["f", "g", "h", "i", "j", "2", "13", "2", "31"],
        ["k", "l", "m", "n", "o", "3", "14", "3", "32"],
        ["p", "q", "r", "s", "t", "4", "15", "4", "33"],
        ["u", "v", "w", "x", "y", "5", "16", "5", "34"],
        ["6", "7", "8", "9", "10", "11", "17", "6", "35"],
        ["18", "19", "20", "21", "22", "23", "24", "7", "36"],
        ["25", "26", "27", "28", "29", "30", "31", "8", "37"],
        ["50", "51", "52", "53", "54", "55", "56", "57", "58"]
    ])
  ) ===
    JSON.stringify(
      rotateImage([
        ["a", "b", "c", "d", "e", "1", "12", "1", "30"],
        ["f", "g", "h", "i", "j", "2", "13", "2", "31"],
        ["k", "l", "m", "n", "o", "3", "14", "3", "32"],
        ["p", "q", "r", "s", "t", "4", "15", "4", "33"],
        ["u", "v", "w", "x", "y", "5", "16", "5", "34"],
        ["6", "7", "8", "9", "10", "11", "17", "6", "35"],
        ["18", "19", "20", "21", "22", "23", "24", "7", "36"],
        ["25", "26", "27", "28", "29", "30", "31", "8", "37"],
        ["50", "51", "52", "53", "54", "55", "56", "57", "58"]
    ])
    )
);

// console.log(
//   rotateImageInPlace([
//     ["a", "b", "c", "d", "e", "1", "12", "1"],
//     ["f", "g", "h", "i", "j", "2", "13", "2"],
//     ["k", "l", "m", "n", "o", "3", "14", "3"],
//     ["p", "q", "r", "s", "t", "4", "15", "4"],
//     ["u", "v", "w", "x", "y", "5", "16", "5"],
//     ["6", "7", "8", "9", "10", "11", "17", "6"],
//     ["18", "19", "20", "21", "22", "23", "24", "7"],
//     ["25", "26", "27", "28", "29", "30", "31", "8"],
//   ])
// );
// console.log(rotateImageInPlace(imageArray) == rotateImage(imageArray));
