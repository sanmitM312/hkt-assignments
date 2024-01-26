/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// NOTE : to make the async await work , you have to import const fs = require('fs').promises module

fileList = []
// read files present in a directory
function readFilesInDirectory(dir){
 return new Promise(function (resolve,reject){
  fs.readdir(dir, (err, files)=> {
    if(err){
      reject(err);
    }
    resolve(files);
  })
 })
}

function readFileCaller(dir){
  return new Promise(function (resolve,reject){
    fs.readFile(dir,"utf-8", (err,data) => {
      if(err)reject(err);
      resolve(data)
    })
  })
}
app.get('/files', (req,res) => {
   readFilesInDirectory('./files')
        .then((files) => {  res.status(200).json(files)})
        .catch((err) => res.status(500).json({error : "Failed to retrieve files"}))
})


app.get('/file/:filename',(req,res) => {
  const { filename } = req.params;
  const filePath = `./files/${filename}`
  readFileCaller(filePath)
      .then((fileContent) => res.status(200).send(fileContent))
      .catch((err) => {
        if(err.code === 'ENOENT'){
          res.status(404).send("File not found")
        }else{
          console.log(err)
          res.status(500).send("Internal server error")
        }
      })
})

const filesDirectory = "./files";
app.get('/file2/:filename', async(req,res) => {
  const { filename } = req.params;

  try {
    const filePath = `${filesDirectory}/${filename}`;
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    res.status(200).send(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      res.status(404).send("File not found");
    } else {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
})
app.get("*",(req,res) => {
  res.status(404).send("Route not found")
})
app.listen(3000,()=> {
  console.log(`Server started on port ${port}`)
})

module.exports = app;