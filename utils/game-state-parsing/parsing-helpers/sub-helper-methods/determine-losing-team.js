function determineLosingTeam(gameData) {
  const homeTeam = gameData[1][1];
  const awayTeam = gameData[2][1];
  const homeTeamScore = +gameData[35][1];
  const awayTeamScore = +gameData[7][1];

  if (homeTeamScore > awayTeamScore) {
    return awayTeam;
  } else if (awayTeamScore > homeTeamScore) {
    return homeTeam;
  } else {
    return "tie";
  }
}

export default determineLosingTeam;
