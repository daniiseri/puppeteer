const routes = require('./routes');

const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, ()=>{
  console.log(`Servido rodando em: http://localhost:${PORT}`);
})