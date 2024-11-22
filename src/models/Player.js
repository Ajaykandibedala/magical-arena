class Player {
    constructor(name, health, strength, attack) {
      if (health <= 0 || strength <= 0 || attack <= 0) {
        throw new Error("Attributes must be positive integers.");
      }
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    isAlive() {
      return this.health > 0;
    }
  
    takeDamage(damage) {
      this.health = Math.max(0, this.health - damage);
    }
  }
  
  module.exports = Player;
  