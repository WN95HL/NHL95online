export const LEAGUE_TABLE_CATEGORIES = ["Manager", "GP", "W", "L", "T", "OTL", "Pts","Pts%", "Gf", "Ga", "Diff", "Strk", "L10", "Gfa", "Gaa", "SO"];
export const LEAGUE_HTMX_TABLE_CATEGORIES = [
  "Manager",
  "Team",
  "GP",
  "W",
  "L",
  "T",
  "OTL",
  "Pts",
  "Pts%",
  "Gf",
  "Ga",
  "Diff",
  "Strk",
  "L10",
  "Gfa",
  "Gaa",
  "SO"
];

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// name of cookie for authorization
export const AUTH_COOKIE = "userAuth";

export const DEFAULT_LEAGUE = "w";

export const MOST_RECENT_SEASON = "4";

export const MOST_RECENT_Q_SEASON = "89";

export const MOST_RECENT_V_SEASON = "1";

export const MOST_RECENT_P_SEASON = "1"

export const PURE_LEAGUE_GAME_TYPE = "season";

export const HOW_MANY_GAME_RESULTS = 8;

export const STATE_PATTERN = /[WQV][SP]?\d{1,3}\.state\d{1,3}/;

export const PURE_LEAGUE_STATE_PATTERN = /NHL_95\.state\d{1,3}$/;


// used as header list for csv stats that are used for google sheets standings
export const CSV_HEADERS = `Matchup,HomeTeam,AwayTeam,AwaySHOTS,AwayPENALTIES,AwayPIM,AwayATTACK,AwayGOALS,AwayFACEOFFS WON,AwayCHECKS,AwayPASS ATT,AwayPASS COMP,AwayPP MIN,AwayPP GOALS,AwayPP OPP,AwayPP SHOTS,AwaySHG,AwayBREAKAWAY,AwayBREAKAWAY GOALS,Away1X ATT,Away1X GOALS,AwayPENALTY SHOTS,AwayPENALTY SHOT GOALS,Away1ST SHOTS,Away2ND SHOTS,Away3RD SHOTS,AwayOT SHOTS,Away1ST GOALS,Away2ND GOALS,Away3RD GOALS,AwayOT GOALS,HomeSHOTS,HomePENALTIES,HomePIM,HomeATTACK,AWayGOALS,HomeFACEOFFS WON,HomeCHECKS,HomePASS ATT,HomePASS COMP,HomePP MIN,HomePP GOALS,HomePP OPP,HomePP SHOTS,HomeSHG,HomeBREAKAWAY,HomeBREAKAWAY GOALS,Home1X ATT,Home1X GOALS,HomePENALTY SHOTS,HomePENALTY SHOT GOALS,Home1ST SHOTS,Home2ND SHOTS,Home3RD SHOTS,HomeOT SHOTS,Home1ST GOALS,Home2ND GOALS,Home3RD GOALS,HomeOT GOALS,TOTAL FO,OT Game
