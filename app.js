const express = require("express");
const cors = require("cors");
const expressRateLimit = require("express-rate-limit");

const {
  randomDialogue,
  randomDialoguesLimit,
  getAllDialogues,
} = require("./controller");

const app = express();

const apiLimiter = expressRateLimit({
  windowMS: 10 * 60 * 1000,
  max: 100,
  message:
    "Too many requests created from this IP,please try again after some time",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(apiLimiter);

app.use(cors());

//route to get random dialogue
app.get("/random", (req, res) => {
  res.json(randomDialogue());
});

//route to get any number of dialogues in range
app.get("/random/:numberOfDialogues", (req, res) => {
  res.json(randomDialoguesLimit(Number(req.params.numberOfDialogues)));
});

///route to get all dialogues
app.get("/all", (req, res) => {
  res.json(getAllDialogues());
});

module.exports = app;
