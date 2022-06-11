const express = require("express");
const cors = require("cors");
const expressRateLimit = require("express-rate-limit");

const {
  randomDialogue,
  randomDialoguesLimit,
  getAllDialogues,
  numOfDialogues,
} = require("./controller");

const app = express();

app.set("trust proxy", 1); //use this line if you’re using a proxy (Heroku, DigitalOcean, etc.); so req IPs are the client’s IP, not the IP of the proxy service
app.set("view engine", "ejs"); //ejs to render
const apiLimiter = expressRateLimit({
  //alternative express-slow-down but it doesn't b,ock that IP address it only slows down the response time
  max: 200,
  windowMS: 10 * 60 * 1000,
  message:
    "Too many requests created from this IP, please try again after some time",
  standardHeaders: true, //return the rate limit info in the `Ratelimit-*` headers
  legacyHeaders: false, //X-RateLimit-Limit is the number of requests allowed during 60 sec window
});

app.use(apiLimiter);

app.use(cors());

app.get("/", (req, res) => {
  res.render("index", { amount: numOfDialogues() }); //rendering index.ejs file
});
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
