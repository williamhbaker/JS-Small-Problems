function sliceTree(startId, endId) {
  let startElement = document.getElementById(startId);
  let endElement = document.getElementById(endId);

  if (!startElement.contains(endElement)) return undefined;

  let paths = [startElement];

  let lastOne = paths[paths.length - 1];

  while (lastOne.id !== endElement.id) {
    [].forEach.call(lastOne.children, (childElem) => {
      if (childElem.contains(endElement)) {
        paths.push(childElem);
      }
    });

    lastOne = paths[paths.length - 1];
  }

  return paths.map((elem) => elem.nodeName);
}