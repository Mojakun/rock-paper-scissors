import GameModel from './GameModel';
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
  static judgementByRock(value) {
    if (this.isRockWinnerHand === value) return GameModel.WIN;
    if (this.ROCK === value) return GameModel.EVEN;
    return GameModel.LOSE;
  }
  static judgementByPaper(value) {
    if (this.isPaperWinnerHand == value) return GameModel.WIN;
    if (this.PAPER === value) return GameModel.EVEN;
    return GameModel.LOSE;
  }
  static judgementByScissors(value) {
    if (this.isScissorsWinnerHand == value) return GameModel.WIN;
    if (this.SCISSORS === value) return GameModel.EVEN;
    return GameModel.LOSE;
  }
}

export default RockPaerScissorsModel;
