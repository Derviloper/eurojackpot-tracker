import { CronJob } from "cron";
import type { NumbersAndQuotes } from "./types";
import { discordClient } from "./discord";

CronJob.from({
  cronTime: "0 0 8 * * 2,5",
  onTick: async () => {
    const response = await fetch(
      "https://www.eurojackpot.de/wlinfo/WL_InfoService?client=jsn&gruppe=ZahlenUndQuoten&ewGewsum=ja&historie=ja&spielart=EJ&adg=ja&lang=de"
    );
    const body = (await response.json()) as NumbersAndQuotes;
    const jackpot =
      body.auswertung.quoten.hauptlotterie.ziehungen[0]?.erwarteteGewinnsummen
        .gewinnklassen[0]?.jackpot ?? 0;
    if (jackpot < 65_000_000) return;
    await discordClient.send({
      content: `Eurojackpot auf ${(jackpot / 1_000_000).toFixed(0)} Mio.`,
      username: "eurojackpot-tracker",
    });
  },
  start: true,
  timeZone: "utc",
  waitForCompletion: true,
});

await discordClient.send({
  content: "Eurojackpot tracker started!",
  username: "eurojackpot-tracker",
});
