"use strict";
// IMPORTS
import express from 'express';
import dotenv  from 'dotenv';

dotenv.config();
const env = process.env.NODE_ENV || 'development';
const router = express.Router();

router.get("/", (req, res) => res.send("salut toi"));

// router.use('/users', require('../bundles/users/router'));

module.exports = router;