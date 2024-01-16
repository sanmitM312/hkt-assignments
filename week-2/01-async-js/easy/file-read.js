const fs = require("fs");

fs.readFile('a.txt', 'utf-8', (err,data) => {
    console.log("inside readFile function's callback")
    if(err){
        console.log(`Some error has occured\n${err.message}`);
        return;
    }
    console.log(`File content\n${data}`);
})

s = 0;
console.log("expensive operation")
for(let i=1; i < 1000000000; i++){
    s += i;
}
