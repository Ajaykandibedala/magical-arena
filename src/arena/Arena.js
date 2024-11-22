const Dice = require('../models/Dice');

class Arena {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.attackDice = new Dice();
    this.defenseDice = new Dice();
  }

  fight() {
    while (this.playerA.isAlive() && this.playerB.isAlive()) {
      const attacker = this.playerA.health <= this.playerB.health ? this.playerA : this.playerB;
      const defender = attacker === this.playerA ? this.playerB : this.playerA;

      this.performAttack(attacker, defender);

      if (!defender.isAlive()) {
        console.log(`${attacker.name} wins!`);
        return;
      }
    }
  }

  performAttack(attacker, defender) {
    const attackRoll = this.attackDice.roll();
    const defenseRoll = this.defenseDice.roll();

    const attackDamage = attackRoll * attacker.attack;
    const defensePower = defenseRoll * defender.strength;

    const damageInflicted = Math.max(0, attackDamage - defensePower);
    defender.takeDamage(damageInflicted);

    console.log(
      `${attacker.name} attacks ${defender.name}: Attack Roll=${attackRoll}, Defense Roll=${defenseRoll}, Damage=${damageInflicted}, ${defender.name} Health=${defender.health}`
    );
  }
}

module.exports = Arena;
