/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function anotherAsyncFn(milliseconds){
    return new Promise((resolve) =>{
        setTimeout(() => {
            // resolve(`ok done after ${milliseconds} ms`);
            resolve();
        },milliseconds)
    })
}
async function sleep(milliseconds) {
    const val = await anotherAsyncFn(milliseconds);
    // console.log(val);
}

// sleep(3000);
module.exports = sleep;
