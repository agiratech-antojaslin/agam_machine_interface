// Required libraries imported here
var serialport           = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline"); 
const bintotext          = require("bintotext");                      // Library to convert binary to text

// Variables and constants initialized here
var SerialPort           = serialport.SerialPort;
const parser             = new ReadlineParser({ delimiter: '\r\n' }); // To remove delimiters \r and \n

// Serial port initialization
var serialPort           = new SerialPort( {
                            path: '/dev/ttyUSB0',
                            baudRate: 9600,
                          });

// Event triggers on open serial port
serialPort.on("open",function () {
  console.log('Port Opened!');
  
});

// Event triggers on serial port data transmission with parser
serialPort.pipe(parser).on('data', line => {
  //console.log(line)
  // let buff = new Buffer.from(line, 'base64')
  // let text = buff.toString('ascii')
  var binaryArr = line.toString().split(" "); 
  var decoded = bintotext(binaryArr)
  console.log("Decoded Data is:", decoded);                          // Print Decoded data
  console.log("****************************************************************************************");
})