"use strict";
const strapi = require("strapi/lib");
const strapiDev = require("strapi/lib/commands/develop");

if (process.env.DEV_MODE === true) {
  strapiDev();
} else {
  strapi().start();
}
