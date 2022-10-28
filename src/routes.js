const routes = require("express").Router();

routes.get("/hard-disc/:id", (req, res) => {
  const payload = require("./repositories/hard-disc.json");
  const { id } = req.params;

  if (!payload) return res.status(400).send("not found");

  if (id == 3 || id == 4)
    return res.send(
      payload.filter(({ description }) => description.includes("SSD"))
    );

  return res.send(payload);
});

routes.get("/processor/:id", (req, res) => {
  const payload = require("./repositories/processor.json");
  const { id } = req.params;

  if (!payload) return res.status(400).send("not found");

  if (id == 3)
    return res.send(
      payload.filter(({ description }) => description.includes("i5"))
    );

  if (id == 4)
    return res.send(
      payload.filter(({ description }) => description.includes("i7"))
    );

  return res.send(payload);
});

routes.get("/video-card/:id", (req, res) => {
  const payload = require("./repositories/video-card.json");
  const { id } = req.params;

  if (!payload) return res.status(400).send("not found");

  if (id > 2) return res.send(payload);

  return res.send();
});

routes.get("/memory/:id", (req, res) => {
  const payload = require("./repositories/memory.json");
  const { id } = req.params;

  if (!payload) return res.send("not found");

  if (id == 2)
    return res.send(
      payload.filter(({ description }) => description.includes("4GB"))
    );

  if (id == 3)
    return res.send(
      payload.filter(({ description }) => description.includes("8GB"))
    );

  if (id == 4)
    return res.send(
      payload.filter(
        ({ description }) =>
          description.includes("32GB") || description.includes("16GB")
      )
    );

  return res.send(payload);
});

routes.get("/desktop", (req, res) => {
  const payload = require("./repositories/desktop.json");

  if (!payload) return res.status(400).send("not found");

  return res.send(payload);
});

routes.get("/cooler", (req, res) => {
  const payload = require("./repositories/cooler.json");

  if (!payload) return res.status(400).send("not found");

  return res.send(payload);
});

routes.get("/font", (req, res) => {
  const payload = require("./repositories/font.json");

  if (!payload) return res.send("not found");

  return res.send(payload);
});

routes.get("/motherboard", (req, res) => {
  const payload = require("./repositories/motherboard.json");

  if (!payload) return res.send("not found");

  return res.send(payload);
});

module.exports = routes;
