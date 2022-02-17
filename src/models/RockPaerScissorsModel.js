import GameModel from './GameModel';
class RockPaerScissorsModel {
  static ROCK = 1;
  static PAPER = 2;
  static SCISSORS = 3;

  static ROCK_WINNER_HAND = this.PAPER;
  static PAPER_WINNER_HAND = this.SCISSORS;
  static SCISSORS__WINNER_HAND = this.ROCK;

  static isRockWinnerHand(value) {
    return this.ROCK_WINNER_HAND === value;
  }
  static isPaperWinnerHand(value) {
    return this.PAPER_WINNER_HAND === value;
  }
  static isScissorsWinnerHand(value) {
    return this.SCISSORS__WINNER_HAND === value;
  }

  static judgementByRock(value) {
    if (this.isRockWinnerHand(value)) return GameModel.WIN;
    if (this.ROCK === value) return GameModel.EVEN;
    return GameModel.LOSE;
  }
  static judgementByPaper(value) {
    if (this.isPaperWinnerHand(value)) return GameModel.WIN;
    if (this.PAPER === value) return GameModel.EVEN;
    return GameModel.LOSE;
  }
  static judgementByScissors(value) {
    if (this.isScissorsWinnerHand(value)) return GameModel.WIN;
    if (this.SCISSORS === value) return GameModel.EVEN;
    return GameModel.LOSE;
  }
}

export default RockPaerScissorsModel;
