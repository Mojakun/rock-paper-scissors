class RockPaerScissorsModel {
  static ROCK = 1;
  static PAPER = 2;
  static SCISSORS = 3;

  static isRockWinnerHand() {
    return this.PAPER;
  }
  static isPaperWinnerHand() {
    return this.SCISSORS;
  }
  static isScissorsWinnerHand() {
    return this.SCISSORS;
  }
}

export default RockPaerScissorsModel;
