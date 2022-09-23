// Required libraries imported here
var serialport           = require("serialport"); 
const { ReadlineParser } = require("@serialport/parser-readline"); 
const bintotext          = require("bintotext");                            // Library to convert binary to text
var fs                   = require("fs");                                   // Import File stream library

// Variables and constants initialized here
var SerialPort = serialport.SerialPort;
const parser = new ReadlineParser({ delimiter: '\r\n' });                   // To remove delimiters \r and \n
var writeStream;
var directoryPath = "/home/agira/Documents/Agam/interface-agira/files/";
var time = Date.now();
writeStream = fs.createWriteStream(directoryPath + "data_" + time + ".txt"); // Created write stream

// Serial port initialization
var serialPort = new SerialPort( {
  path: '/dev/ttyUSB0',
  baudRate: 9600,
});

// Event triggers on open serial port
serialPort.on("open",function () {                                           // Serial port opened
  console.log('Port opened now');
});

// Event triggers on serial port data transmission without parser
// serialPort.on('data', function(data) {                                    // Without parser
//   console.log(data)
//   writeStream.write(data.toString());
// });

// Event triggers on serial port data transmission with parser
serialPort.pipe(parser).on('data', line => {                                 // With parser
    console.log(line)
    // let buff = new Buffer.from(line, 'base64')
    // let text = buff.toString('ascii')
    //let decoded = base64decode(line.toString()); 
    writeStream.write(line.toString());
});