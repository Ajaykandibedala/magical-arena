class Dice {
    constructor(sides = 6) {
      if (sides <= 0) {
        throw new Error("Dice must have positive sides.");
      }
      this.sides = sides;
    }
  
    roll() {
      return Math.floor(Math.random() * this.sides) + 1;
    }
  }
  
  module.exports = Dice;
  