import { WebhookClient } from "discord.js";
import { environment } from "./environment";

export const discordClient = new WebhookClient({
  id: environment.DISCORD_WEBHOOK_ID,
  token: environment.DISCORD_WEBHOOK_TOKEN,
});
