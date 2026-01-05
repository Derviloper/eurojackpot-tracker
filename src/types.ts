export type NumbersAndQuotes = {
  auswertung: {
    hauptlotterieAsNr: number;
    hauptlotterieName: null;
    hinweiseAufteilung: {
      hinweisTexte: {
        importanceLevel: number;
        text: string;
        url: string | null;
        urlText: string | null;
      }[];
      nummer: number;
    }[];
    quoten: {
      gsPraemienziehung: null;
      hauptlotterie: {
        anmerkungen: unknown[];
        ziehungen: {
          anmerkungen: unknown[];
          bezeichnung: string;
          einsatz: null;
          erwarteteGewinnsummen: {
            annahmeschluss: Date;
            bezeichnung: string;
            folgeziehung: Date;
            gewinnklassen: {
              jackpot: number;
              jackpotVorlaeufig: null;
              klasse: number;
              waehrung: string;
            }[];
          };
          gewinnklassen: {
            anmerkungsNummer: null;
            anzahl: number;
            aufteilung:
              | {
                  anzahl: number;
                  hinweisNummer: number | null;
                  kuerzel: string;
                  land: string;
                  landAlpha3: string;
                  nkAnzahl: number;
                  provinz: string | null;
                  provinzIsoCode: string | null;
                }[]
              | null;
            beschreibung: string;
            jackpot: null;
            klasse: number;
            kurzbeschreibung: string;
            nkAnzahl: number;
            quote: number;
            quoteText: string;
          }[];
          typ: string;
          waehrung: string;
        }[];
      };
      plus5: null;
      spiel77: null;
      super6: null;
    };
    spieleinsatz: {
      einsatznrw: {
        gsPraemienziehung: null;
        hauptlotterie: number;
        plus5: null;
        spiel77: null;
        super6: null;
      };
      gsPraemienziehung: null;
      hauptlotterie: number;
      plus5: null;
      spiel77: null;
      super6: null;
      waehrung: string;
    };
  };
  error: null;
  head: {
    datum: Date;
    fehlenDaten: boolean;
    folgeZiehung: {
      annahmeschluss: Date;
      datum: Date;
    };
    spielart: string;
    spielformel: string;
    spielrunde: null;
    standErwarteteGewinne: {
      hauptlotterieAusgewertet: boolean;
      spiel77Ausgewertet: boolean;
      super6Ausgewertet: boolean;
    };
    version: string;
  };
  history: {
    jahre: number[];
    tage: Date[];
    wettrunden: null;
    wochen: unknown[];
  };
  objType: string;
  zahlen: {
    gsPraemienziehung: Ziehungen;
    hauptlotterie: Ziehungen;
    hauptlotterieAsNr: number;
    hauptlotterieName: null;
    jokerzahl: string;
    kandidatenspiel: {
      spiele: unknown[];
    };
    plus5: string;
    spiel77: string;
    super6: string;
  };
};

type Ziehungen = {
  ziehungen: {
    bezeichnung: string;
    gewinnklasse: null;
    superzahl: string;
    zahlen: string[];
    zahlenSortiert: string[];
    zusatzzahl: string;
  }[];
};
