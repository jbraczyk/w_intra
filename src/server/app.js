"use strict";
// imports
import express from 'express'
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";


import bodyParser from "body-parser";
import apiRouter from "../routes";
// config
dotenv.config();
const env = process.env.NODE_ENV || "development";

// Instantiate app
const app = express();
// Helmet
app.use(helmet());
// CORS.
app.use(
    cors({
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Body Parser configuration
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "10mb"
}));
app.use(bodyParser.json({
    limit: "10mb"
}));

//app.use(express.static('./public'));
app.use("/api/", apiRouter);

module.exports = app;