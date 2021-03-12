const net = require('net');

/**
 * Establishes connection with the game server
 */
const settings = { 
  host: 'localhost',
  port: 50541
};

const connect = function() {
  console.log('Connecting ...');
  const conn = net.createConnection(settings, () => {
    console.log('connected to server!');
    conn.write('This is an example');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // Event Handlers/Listeners
  conn.on('data', (data) => {
    console.log("data: ", data);
    // Close connection if desired
    // conn.end();
  });
  conn.on('connect', () => {
    console.log("snake starting")
    conn.write('name: ACW')
  })
  conn.on('end', () => {
    // on closing, perform certain closing executions
    console.log('disconnected from server');
  });
  return conn;
}

module.exports = {connect}