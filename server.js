const express = require('express');
const Tailor = require('node-tailor');
const tailor = new Tailor({ templatesPath: __dirname + '/templates' });
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Micro Frontends');
  req.url = '/home'; // Redirect to the home template
  tailor.requestHandler(req, res);
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
