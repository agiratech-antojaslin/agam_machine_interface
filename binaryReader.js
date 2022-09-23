const express = require('express');
const app = express();
const port = 3000;
var fs = require("fs");
const bintotext = require("bintotext");

read("/home/agira/Documents/Agam/interface-agira/files/data_1663929656074.txt");

function read(filePath) {
    console.log("Reading file");
    const readableStream = fs.createReadStream(filePath, 'ascii');
  
    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
  
    readableStream.on('data', (chunk) => {
      console.log("Reading...");
        console.log(chunk);
        var binaryArr = chunk.toString().split(" ");
        console.log(binaryArr);
        var decoded = bintotext(binaryArr)
        console.log(decoded);
    })
}

// app.get('/', (req, res) => {
//     read("/home/agira/Documents/Agam/interface-agira/files/data.txt");
// })

app.listen(process.env.PORT || port, () => {
    console.log(`App listening at port ${port}`)
})