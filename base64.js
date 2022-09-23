// Required libraries imported here
var serialport                       = require("serialport");
const { ReadlineParser }             = require("@serialport/parser-readline");
const { base64encode, base64decode } = require('nodejs-base64');                        // Library to encode/decode base64 text

// Variables and constants initialized here
var SerialPort                       = serialport.SerialPort;
const parser                         = new ReadlineParser({ delimiter: '\r\n' });

// Serial port initialization
var serialPort                       = new SerialPort( {
                                          path: '/dev/ttyUSB0',
                                          baudRate: 9600,
                                        });

// Event triggers on open serial port
serialPort.on("open",function () {
  console.log('Port opened now');
});

// Event triggers on serial port data transmission with parser
serialPort.pipe(parser).on('data', line => {
  //console.log(line)
  // let buff = new Buffer.from(line, 'base64')
  // let text = buff.toString('ascii')
  let decoded = base64decode(line.toString());                                           // Used base64decode plugin
  console.log("Decoded Data is:", decoded);
  console.log("****************************************************************************************");
})