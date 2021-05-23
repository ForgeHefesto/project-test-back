import mongoose from "mongoose";

import { Logger } from "../utils/index.js";
import { DatabaseError } from "../error/index.js";

class Connect {
  /**
   * Connection method
   *
   * @memberof Connect
   * @method connect
   * @returns {void}
   */
  connect() {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          Logger.info("Database is connected");
        }
      }
    );
  }
}

export default new Connect();
