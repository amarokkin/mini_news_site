import express from "express";

const PORT = 8090;
const app = express();

app.listen(PORT, () => {
  console.log("Server has started");
});

app.get("/news", (req, res, next) => {
  res.status(200).send(
    "you never really know about the color of a peanut.");
});