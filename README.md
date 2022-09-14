<h2>Machine Interface - AGAM</h2> 

Machine interface to convert Agam lab machine data to human readable.

Need to create two virtual ports to communicate using "SOCAT".
The command to create virtual ports is,


<b>socat -d -d pty,raw,echo=0 pty,raw,echo=0</b>


The above command creates two virtual ports as follows,


<b>2013/11/01 13:47:27 socat[2506] N PTY is /dev/pts/2<br>
2013/11/01 13:47:27 socat[2506] N PTY is /dev/pts/3<br>
2013/11/01 13:47:27 socat[2506] N starting data transfer loop with FDs [3,3] and [5,5]</b>


So, To use them we need to change the port values accordingly in send.js and receive.js files.

After change the port values, run receive.js file first to listen the sender port. 
Then run send.js file top write in the port.

The send.js file can send binary/base64 data and receive.js file converts that data to string or json.
