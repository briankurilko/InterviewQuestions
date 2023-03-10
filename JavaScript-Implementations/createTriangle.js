function createTriangleWithRightAngle(size) {
  const triangle = [];
  for (let i = 0; i < size; ++i) {
    const stars = [];
    for (let j = 0; j < i + 1; ++j) {
      stars[j] = "*";
    }
    triangle[i] = stars.join("");
  }
  return triangle.join("\n");
}

function createCenteredTriangle(size) {
  const triangle = [];
  for (let i = 0, n = size - 1; i < size; i++, n--) {
    const spaces = [];
    for (let j = 0; j < n; ++j) {
      spaces.push(" ");
    }
    const stars = [];
    for (let j = 0; j < i + 1; ++j) {
      stars[j] = "* ";
    }
    triangle[i] = spaces.join("") + stars.join("");
  }
  return triangle.join("\n");
}

console.log(createCenteredTriangle(6));
