// let num = [12,32,354,65,846,2,4,7,845]

// // let [num1, num2, num3, num4, num5, num6,] = num
// let [...number] = num

// console.log(number)









console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 2000);

Promise.resolve().then(() => {
    console.log("Promise 1");

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");