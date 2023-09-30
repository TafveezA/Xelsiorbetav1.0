const express = require("express");
const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'})
const app = express();
const port = 3000;

const PORT = process.env.PORT ||5000
const NODE_ENV =process.env.NODE_ENV

const xrplRoutes = require('./routes/xrplapiroutes')
app.use('/api/v1/xrp/',xrplRoutes)

app.get("/", function (req, res) {
  res.send("Hello XRPL!");
});

app.listen(port, function () {
  console.log(`Xelsior DEX  listening on port ${PORT}!`);
});
