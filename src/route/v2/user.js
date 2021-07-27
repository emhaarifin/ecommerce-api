/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const route = express.Router();
const user = require("../../controller/v2/user");
const auth = require("../../middleware/auth");

route
  .post("/login", auth.verifyAccess, user.login)
  .post("/register/custommer", user.registerCus)
  .get("/actived/:token", user.activactions);

module.exports = route;
