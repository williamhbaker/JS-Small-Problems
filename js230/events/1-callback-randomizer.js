function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let randInt = () => 2 * Math.floor(Math.random() * (callbacks.length + 1));

  let makeCounter = (limit) => {
    let count = 0;
    let timer = setInterval(() => {
      count += 1;
      console.log(count);
    }, 1000);
    setTimeout(() => clearInterval(timer), (limit + 1) * 1000);
  };

  makeCounter(callbacks.length * 2);

  callbacks.forEach((func) => setTimeout(func, randInt() * 1000));
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6