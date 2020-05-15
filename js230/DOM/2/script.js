function walk(node, callback) {
  callback(node);
  for (let idx = 0; idx < node.childNodes.length; idx += 1) {
    walk(node.childNodes[idx], callback);
  }
}

function childNodes(nodeId) {
  let thisNode = document.getElementById(nodeId);

  let directNodes = thisNode.childNodes.length;

  let allNodes = [];
  walk(thisNode, (node) => allNodes.push(node));

  return [directNodes, allNodes.length - directNodes - 1];
}