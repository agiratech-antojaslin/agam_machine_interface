var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
const { ReadlineParser } = require('@serialport/parser-readline');
const parser = new ReadlineParser();
const bintotext = require("bintotext");
const { base64encode, base64decode } = require('nodejs-base64');
const crypto = require("crypto");
const algorithm = "md5"; 

var serialPort = new SerialPort( {
  path: '/dev/pts/2',
  baudRate: 9600,
  
});

// port.pipe(parser)

serialPort.on("open",function () { 
  console.log('Port opened');
  serialPort.on('data', function(data) {

    // FOR BINARY 

    // var text = data.toString().split(" ");
    // console.log(bintotext(text));

    // FOR BASE64

    // let decoded = base64decode(data.toString()); 
    // console.log(decoded);

    // FOR HEX

    const buf = Buffer.from(data, 'hex');
    var text = buf.toString('utf8')
    console.log(text);

    // FOR HASH

    // const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    // let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
    // decryptedData += decipher.final("utf8");
    // console.log("Decrypted message: " + decryptedData);
    
  });
});