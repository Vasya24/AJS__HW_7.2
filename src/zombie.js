import { Character } from './index'

  class Zombie extends Character {
    constructor(name) {
    super(name) 
    this.attack = 40;
    this.defence = 10;
  }
}

export { Zombie }