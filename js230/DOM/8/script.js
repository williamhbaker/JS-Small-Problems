function arrayToNodes(nodes, parent = document) {
  if (nodes.length === 0) return;

  let elem = document.createElement(nodes[0]);

  if (elem.tagName === 'BODY') {
    elem = document.body;
  } else {
    parent.appendChild(elem);
  }

  nodes[1].forEach((nodeList) => arrayToNodes(nodeList, elem));

}

let nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];

document.addEventListener('DOMContentLoaded', () => {
  arrayToNodes(nodes);
});