import { OpenAPIRoute, contentJson } from "chanfana";
import type { AppContext } from "../../types";
import { z } from "zod";
import administer from "../../config/Administer.json";

export class InfoGet extends OpenAPIRoute {
  public schema = {
    tags: ["Public"],
    summary: "Returns administer info",
    responses: {
      "200": {
        description: "Administer info",
        ...contentJson(z.object({ administer: z.any() })),
      },
    },
  };

  public async handle(c: AppContext) {
    return { administer };
  }
}
