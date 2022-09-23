var serialport = require("serialport"); 
var SerialPort = serialport.SerialPort;
const { ReadlineParser } = require("@serialport/parser-readline"); 
const parser = new ReadlineParser({ delimiter: '\r\n' }) // To remove delimiters \r and \n
const bintotext = require("bintotext");
var fs = require("fs");
var writeStream;
var directoryPath = "/home/agira/Documents/Agam/interface-agira/files/";
var time = Date.now();
writeStream = fs.createWriteStream(directoryPath + "data_" + time + ".txt"); // Created write stream

console.log(time);

var serialPort = new SerialPort( {
  path: '/dev/ttyUSB0',
  baudRate: 9600,
});

serialPort.on("open",function () { // Serial port opened
  console.log('Port opened now');
});

// serialPort.on('data', function(data) { // Without parser
//   console.log(data)
//   writeStream.write(data.toString());
// });

serialPort.pipe(parser).on('data', line => { // With parser
    console.log(line)
    // let buff = new Buffer.from(line, 'base64')
    // let text = buff.toString('ascii')
    //let decoded = base64decode(line.toString()); 
    writeStream.write(line.toString());
});