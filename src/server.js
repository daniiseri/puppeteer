require('./repositories/index');
const hardDisc = require('./repositories/hard-disc.json');
const processor = require('./repositories/processor.json');
const memory = require('./repositories/memory.json');
const videoCard = require('./repositories/video-card');

const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/hard-disc', (req, res)=>{
  const payload = hardDisc; 
  res.send(payload);
})

app.get('/processor', (req, res)=>{
  const payload = processor;
  res.send(payload);
})

app.get('/video-card', (req, res)=>{
  const payload = videoCard;
  res.send(payload);
})

app.get('/memory', (req, res)=>{
  const payload = memory;
  res.send(payload);
})

app.listen(PORT, ()=>{
  console.log(`Servido rodando em: http://localhost:3000`);
})