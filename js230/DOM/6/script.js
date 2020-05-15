function nodeSwap(firstId, secondId) {
  let firstNode = document.getElementById(firstId);
  let secondNode = document.getElementById(secondId);

  if (!firstNode || !secondNode) return;

  let dummy1 = document.createElement('div');
  let dummy2 = document.createElement('div');

  firstNode = firstNode.parentElement.replaceChild(dummy1, firstNode);
  secondNode = secondNode.parentElement.replaceChild(dummy2, secondNode);

  dummy1.parentElement.replaceChild(secondNode, dummy1);
  dummy2.parentElement.replaceChild(firstNode, dummy2);
}