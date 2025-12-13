export const express = require("express");
export const router = express.Router();

module.exports = (controller) => {
  router.post("/login", controller.login);
  router.post("/google", controller.loginGoogle);
  router.post("/facebook", controller.loginFacebook);
  router.post("/apple", controller.loginApple);

  return router;
};