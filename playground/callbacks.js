const add = (a, b, callback) => {
  result = a + b;
  callback(result);
};

add(2, 3, (sum) => {
  console.log("Result is sum: ", sum);
});

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error");
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
