import compression from "compression";
import express from "express";
import morgan from "morgan";
const { default: helmet } = require('helmet')

const app = express();

//init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())




//init db







//init route







//handing error

module.exports = app;