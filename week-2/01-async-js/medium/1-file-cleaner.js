const fs = require("fs")

fs.readFile('a.txt','utf-8',(err,data) => {
    if(err){
        console.log(err); return;
    }
    console.log(`Data read from file\n${data}`);

    // some cleanup logic
    let cleaned_data = data.replace(/[^\S\n]+/g,' ');
    // console.log(cleaned_data);

    fs.writeFile('a.txt',cleaned_data,(err,data) => {
        if(err){
            console.log(err); 
            return;
        }
        console.log(`Cleaned up data written to file!`);
    })
})