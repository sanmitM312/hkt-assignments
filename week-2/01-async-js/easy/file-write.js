const fs = require("fs")

fs.writeFile('a.txt',"Hello writing again to a.txt",function (err) {
    if (err) throw err;
    console.log('Changed the file contents!');
})

s = 0;
console.log("expensive operation")
for(let i=1; i < 1000000000; i++){
    s += i;
}
