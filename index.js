require('dotenv').config();
const express = require('express');
const path = require('path')

const PORT = process.env.APP_PORT || 5001
const IP = process.env.APP_IP || 'localhost'

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(PORT, IP, () => {
  console.log(`Server started on ${IP}:${PORT}`)
})