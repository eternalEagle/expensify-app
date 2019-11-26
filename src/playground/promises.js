const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
    reject("Something went wrong");
  }, 3500);
});

console.log("before");

promise
  .then(data => {
    console.log("2", data);
  })
  .catch(error => {
    console.log(error);
  });

console.log("after");
