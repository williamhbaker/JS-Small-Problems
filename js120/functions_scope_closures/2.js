let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map((number) => {
      return this.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());