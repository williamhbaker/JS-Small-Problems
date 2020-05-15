document.addEventListener('DOMContentLoaded', () => {
  function nodesToArr(node = document.body) {
    let otherStuff = [];
    [].forEach.call(node.children, (elem) => otherStuff.push(nodesToArr(elem)));
    return [node.tagName, otherStuff];
  }

  console.log(nodesToArr());
});