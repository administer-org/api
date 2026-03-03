import { OpenAPIRoute, contentJson } from "chanfana";
import type { AppContext } from "../../types";
import { z } from "zod";
import servers from "../../config/AppServers.json";

export class AppServersGet extends OpenAPIRoute {
  public schema = {
    tags: ["Public"],
    summary: "Returns list of app servers",
    responses: {
      "200": {
        description: "App servers",
        ...contentJson(z.array(z.string())),
      },
    },
  };

  public async handle(c: AppContext) {
    return servers as string[];
  }
}
