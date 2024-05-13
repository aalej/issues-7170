import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  const activeLevels = new Map();
  for (const [level, lvlCount] of activeLevels.entries()) {
    console.log(level, lvlCount);
  }
  response.send("Hello from Firebase!");
});
