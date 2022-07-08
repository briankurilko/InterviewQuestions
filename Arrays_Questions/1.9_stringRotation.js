function isRotation(s1, s2) {
  const s2Concat = s2 + s2;
  return s2Concat.includes(s1);
}

console.log(isRotation("waterbottle", "erbottlewat"));
