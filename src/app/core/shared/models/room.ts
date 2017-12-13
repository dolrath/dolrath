import { Character } from '.';

export class Room {
  readonly characters = new Array<Character>();

  constructor(public name: string) { }

  addPlayer(character: Character): void {
    this.characters.push(character);
  }
}
