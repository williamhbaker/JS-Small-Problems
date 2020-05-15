function colorGeneration(gen) {
  if (!gen > 0) return undefined;

  let elements = [document.body];

  for (let idx = 1; idx <= gen; idx += 1) {
    elements = elements.flatMap((elem) => Array.from(elem.children));
  }

  elements.forEach((elem) => elem.classList.add('generation-color'));
}