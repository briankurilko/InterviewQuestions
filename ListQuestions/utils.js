export function arrayToList([data, ...array]) {
  if (data === undefined) {
    return null;
  }
  const next = arrayToList(array);
  return { data, next };
}

export function listToArray(list) {
  let array = [];
  for (let node = list; node !== null; node = node.next) {
    array.push(node.data);
  }
  return array;
}

export function getLength(list) {
  let length = 0;
  for (let node = list; node !== null; node = node.next) {
    length++;
  }
  return length;
}
