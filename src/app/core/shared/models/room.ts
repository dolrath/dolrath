import { Character } from '.';

export class Room {
  characters = new Array<Character>();

  constructor(public name: string) { }

  addCharacters(characters: Array<Character>): void {
    this.characters = characters;
  }
}
