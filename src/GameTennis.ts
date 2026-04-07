interface GameTennisInterface {
  getScore(): string;
  playerOneScore(): GameTennisInterface;
}

const getScore = (): string => {
  return 'love-love';
};

export class GameTennis implements GameTennisInterface {
  constructor(
    private player1Score: number = 0,
    private player2Score: number = 0,
  ) {}

  playerOneScore(): GameTennisInterface {
    return new GameTennis(this.player1Score + 15, this.player2Score);
  }

  playerTwoScore(): GameTennisInterface {
    return new GameTennis(this.player1Score, this.player2Score + 15);
  }

  getScore(): string {
    if (this.player1Score === 0 && this.player2Score === 0) {
      return 'love-love';
    } else if (this.player1Score === 15 && this.player2Score === 0) {
      return '15-love';
    } else if (this.player1Score === 0 && this.player2Score === 15) {
      return 'love-15';
    } else {
      return `${this.player1Score}-love`;
    }
  }
}
