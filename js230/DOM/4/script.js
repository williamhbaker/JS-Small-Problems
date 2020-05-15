function allPaths(elementList) {
  let finalElement = elementList[elementList.length - 1];
  if (finalElement.children.length === 0) return [elementList];

  let children = Array.from(finalElement.children);
  let branchedPaths = children.map((child) => elementList.concat(child));

  return branchedPaths.flatMap((path) => allPaths(path));
}

function sliceTree(startId, endId) {
  let startElement = document.getElementById(startId);
  let endElement = document.getElementById(endId);

  let paths = allPaths([startElement]);
  let path = paths.filter((elementList) => elementList.includes(endElement));
  if (path.length === 0) return undefined;

  let endElementIdx = path[0].indexOf(endElement);

  return path[0].slice(0, endElementIdx + 1).map((elem) => elem.tagName);
}