let greetings = function(nameArr, detailsObj) {
  let fullName = nameArr.join(' ');
  let fullOcc = Object.values(detailsObj).join(' ');
  return `Hello, ${fullName}! Nice to have a ${fullOcc} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
