function domTreeTracer(elementId) {
  let output = [];

  let thisElement = document.getElementById(elementId);

  do {
    let parent = thisElement.parentElement;
    let siblings = [].map.call(parent.children, ((elem) => elem.nodeName));
    output.push(siblings);
    thisElement = parent;
  } while (thisElement.id);

  return output;
}

function $domTreeTracer(elementId) {
  let output = [];
  let $thisElement = $(`#${elementId}`);

  do {
    output.push($thisElement
      .parent()
      .children()
      .get()
      .map((elem) => elem.nodeName)
    );

    $thisElement = $thisElement.parent();

  } while ($thisElement.attr('id'));

  return output;
}