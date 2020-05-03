"use strict";
const strapi = require("strapi/lib");
const strapiDev = require("strapi/lib/commands/develop");
const express = require("express");

const app = express();

if (process.env.DEMO_MODE === true) {
  app.get("/", (req, res) => res.send("Hello World!"));
} else {
  if (process.env.DEV_MODE === true) {
    strapiDev();
  } else {
    strapi().start();
  }
}
