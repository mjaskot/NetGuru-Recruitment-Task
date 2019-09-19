import { Router } from "express";
import { logger } from "../../core/logger";
import { getBaseRouterPath } from "../getBaseRouterPath";

export const logRoutersPaths = (router: Router, collectionName: string) => {
  return router.stack
    .filter(r => r.route)
    .map(r => {
      logger.info(
        `Successfully registered route! - Method: ${Object.keys(
          r.route.methods
        )[0].toUpperCase()} -> "${getBaseRouterPath(collectionName)}${
          r.route.path
        }"`
      );
    });
};
