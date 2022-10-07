const routes = require('express').Router();

routes.get('/hard-disc', (req, res)=>{
  const payload = require('./repositories/hard-disc.json'); 

  if(!payload)
    return res.status(400).send('not found');

  return res.send(payload);
})

routes.get('/processor', (req, res)=>{
  const payload = require('./repositories/processor.json');;

  if(!payload)
    return res.status(400).send('not found');

  return res.send(payload);
})

routes.get('/video-card', (req, res)=>{
  const payload = require('./repositories/video-card.json');

  if(!payload)
    return res.status(400).send('not found');

  return res.send(payload);
})

routes.get('/memory', (req, res)=>{
  const payload = require('./repositories/memory.json');

  if(!payload)
    return res.send('not found');

  return res.status(400).send(payload);
})

routes.get('/desktop', (req, res)=>{
  const payload = require('./repositories/desktop.json');

  if(!payload)
    return res.send('not found');

  return res.status(400).send(payload);
})

routes.get('/cooler', (req, res)=>{
  const payload = require('./repositories/cooler.json');

  if(!payload)
    return res.send('not found');

  return res.status(400).send(payload);
})

routes.get('/font', (req, res)=>{
  const payload = require('./repositories/font.json');

  if(!payload)
    return res.send('not found');

  return res.status(400).send(payload);
})

routes.get('/motherboard', (req, res)=>{
  const payload = require('./repositories/motherboard.json');

  if(!payload)
    return res.send('not found');

  return res.status(400).send(payload);
})

module.exports = routes;