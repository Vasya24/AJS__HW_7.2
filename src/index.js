class Character {
    constructor(name) {
      this.name = name;
      this.level = 1;
      this.health = 100;
  }
    levelUp() {
          if (this.health === 0) {
        throw Error('Трупов не повысить!')
      }
      this.level++;
      this.attack += Math.ceil(this.attack*0.2);
      this.defence += Math.ceil(this.defence * 0.2);
      this.health = 100;
    }
  }
  
  class Bowman extends Character {
    attack = 25;
    defence = 25
  };
  
  class Swordsman extends Character {
    attack = 40;
    defence = 10;
  }
  
  class Undead extends Character {
    attack = 25;
    defence = 25;
  }
  
  class Zombie extends Character {
    attack = 40;
    defence = 10;
  }
  
  class Magician extends Character {
    attack = 10;
    defence = 40;
  }
  
  class Daemon extends Character {
    attack = 10;
    defence = 40;
  }

  export { Character, Daemon }