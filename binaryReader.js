var fs = require("fs");
const bintotext = require("bintotext"); // Library to convert binary to text
const directoryPath =  "/home/agira/Documents/Agam/interface-agira/files/"; // Static folder path where file is saving

read(directoryPath + "data_1663935166909.txt"); // Read function initialized

function read(filePath) {
    console.log("Reading file");
    const readableStream = fs.createReadStream(filePath, 'ascii'); // Read stream created
  
    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
  
    readableStream.on('data', (chunk) => {
        console.log("Reading...");
        console.log(chunk);
        var binaryArr = chunk.toString().split(" "); // Read binary data has split into an array
        console.log(binaryArr);
        var decoded = bintotext(binaryArr) // Binary array converted to text
        console.log(decoded);
    })
}
