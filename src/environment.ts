import "dotenv/config";
import z from "zod";

export const environment = z
  .object({
    DISCORD_WEBHOOK_ID: z.string(),
    DISCORD_WEBHOOK_TOKEN: z.string(),
  })
  .parse(process.env);
