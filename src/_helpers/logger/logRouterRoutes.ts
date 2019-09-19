import { Router } from "express";
import { logger } from "../../core/logger";

export const logRoutersPaths = (router: Router) => {
  return router.stack
    .filter(r => r.route)
    .map(r => {
      logger.info(
        `Successfully registered route! - Method: ${Object.keys(
          r.route.methods
        )[0].toUpperCase()} -> "${r.route.path}"`
      );
    });
};
