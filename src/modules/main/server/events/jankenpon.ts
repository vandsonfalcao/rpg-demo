export enum JankenponOption {
  ROCK      = 'rock',
  PAPER     = 'paper',
  SCISSORS  = 'scissors'
}

export enum JankenponResult {
  WIN   = 'Vitoria',
  DRAW  = 'Empate',
  LOSS  = 'Derrota'
}

export class Jankenpon {
  private readonly options: JankenponOption[];

  constructor() {
    this.options = [JankenponOption.ROCK, JankenponOption.PAPER, JankenponOption.SCISSORS];
  }

  getRandomOption(): JankenponOption {
    const randomIndex = Math.floor(Math.random() * this.options.length);
    return this.options[randomIndex];
  }

  compareOptions(playerOption: JankenponOption, opponentOption: JankenponOption): JankenponResult {
    if (playerOption === opponentOption) {
      return JankenponResult.DRAW;
    }

    if (
      (playerOption === JankenponOption.ROCK && opponentOption === JankenponOption.SCISSORS) ||
      (playerOption === JankenponOption.PAPER && opponentOption === JankenponOption.ROCK) ||
      (playerOption === JankenponOption.SCISSORS && opponentOption === JankenponOption.PAPER)
    ) {
      return JankenponResult.WIN;
    }

    return JankenponResult.LOSS;
  }
}
