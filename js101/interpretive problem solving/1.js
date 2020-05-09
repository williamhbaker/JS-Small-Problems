let lightsOn = function(switches) {
  let bank = Array(switches).fill().map((_) => false);

  for (let count = 1; count <= switches; count += 1) {
    bank = bank.map((pos, idx) => {
      return (idx + 1) % count === 0 ? !pos : pos;
    });
  }

  bank = bank.map((pos, idx) => {
    return pos === true ? (idx + 1) : false;
  });

  return bank.filter((elem) => !!elem);
};

console.log(lightsOn(100));