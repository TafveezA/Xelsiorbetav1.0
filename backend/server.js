const express = require("express");
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config({path:'./config/config.env'})
const app = express();


const PORT = process.env.PORT ||5000
const NODE_ENV =process.env.NODE_ENV
app.use(cors({
  origin: '*'
}));

const xrplRoutes = require('./routes/xrplapiroutes')
app.use('/api/v1/xrpl/',xrplRoutes)
const priceRoutes = require('./routes/price')
app.use('/api/v1/price/',priceRoutes)

app. get("/", function (req, res) {
  res.send("Hello Xelsior DEX is here!");
});

app.listen(PORT, function () {
  console.log(`Xelsior DEX  listening on port ${PORT}!`);
});
