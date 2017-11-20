import { Character } from '.';

export class Player {
  constructor(
    readonly email: string,
    readonly characters: Array<Character>) { }

  addCharacter(character: Character): void {
    this.characters.push(character);
  }
}
