export const express = require("express");
export const router = express.Router();

module.exports = (controller) => {
  router.post("/Registro", controller.Registro);
  router.post("/google", controller.RegistroGoogle);
  router.post("/facebook", controller.RegistroFacebook);
  router.post("/apple", controller.RegistroApple);

  return router;
};