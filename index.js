// import express from 'express'; // ES Modules
const express = require('express'); // CommonJS modules, and it is equivalent to the line above

const server = express(); // creates a server

// request/route handlers

// handles GET requests to / on localhost:8000
server.get('/', (req, res) => {
  res.send('Hello Node 23!');
});

// write a post handler to /echo that returns the data sent in the body
server.post('/echo', (req, res) => {
  const data = req.body;

  res.json(data);
});

// listen for requests in a particular port on localhost
const port = 8000; // localhost:8000
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));
