import express from "express";

import userRouter from "./userRouter.js";

class Router {
  /**
   * @constructor
   */
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  /**
   * Set all routes
   *
   * @memberof Router
   * @method setRoutes
   * @return {void}
   */
  setRoutes() {
    this.router.use("/users", userRouter);
  }
}

export default new Router().router;
