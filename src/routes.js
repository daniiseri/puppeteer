const routes = require('express').Router();

const hardDisc = require('./repositories/hard-disc.json');
const processor = require('./repositories/processor.json');
const memory = require('./repositories/memory.json');
const videoCard = require('./repositories/video-card.json');
const desktop = require('./repositories/desktop.json');

routes.get('/hard-disc', (req, res)=>{
  const payload = hardDisc; 
  res.send(payload);
})

routes.get('/processor', (req, res)=>{
  const payload = processor;

  if(!payload)
    return res.send('not found');

  return res.send(payload);
})

routes.get('/video-card', (req, res)=>{
  const payload = videoCard;

  if(!payload)
    return res.send('not found');

  return res.send(payload);
})

routes.get('/memory', (req, res)=>{
  const payload = memory;

  if(!payload)
    return res.send('not found');

  return res.send(payload);
})

routes.get('/desktop', (req, res)=>{
  const payload = desktop;

  if(!payload)
    return res.send('not found');

  return res.send(payload);
})

module.exports = routes;