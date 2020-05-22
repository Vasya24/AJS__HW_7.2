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
      this.level += 1;
      this.attack += Math.ceil(this.attack*0.2);
      this.defence += Math.ceil(this.defence * 0.2);
      this.health = 100;
    }
  }
  
  export { Character }