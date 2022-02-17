class GameModel {
  static WIN = 1;
  static EVEN = 2;
  static LOSE = 3;

  static isWin(value) {
    return value == this.WIN;
  }
  static isEven(value) {
    return value == this.EVEN;
  }
  static isLose(value) {
    return value == this.LOSE;
  }
}
export default GameModel;
