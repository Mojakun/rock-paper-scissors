import GameModel from './GameModel';
class RockPaperScissorsModel {
  static ROCK = 1;
  static SCISSORS = 2;
  static PAPER = 3;

  static ROCK_WINNER_HAND = this.SCISSORS;
  static SCISSORS_WINNER_HAND = this.PAPER;
  static PAPER_WINNER_HAND = this.ROCK;

  static RockPaperScissorsMap = [this.ROCK, this.SCISSORS, this.PAPER];

  static isRockWinnerHand(value) {
    return this.ROCK_WINNER_HAND === value;
  }
  static isPaperWinnerHand(value) {
    return this.PAPER_WINNER_HAND === value;
  }
  static isScissorsWinnerHand(value) {
    return this.SCISSORS_WINNER_HAND === value;
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

  static enemyRandomHand() {
    return this.RockPaperScissorsMap[Math.floor(Math.random() * this.RockPaperScissorsMap.length)];
  }
}

export default RockPaperScissorsModel;
