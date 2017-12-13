import { Character } from '.';

export class Room {
  readonly characters: Array<Character> = new Array<Character>();

  constructor(readonly name: string) { }

  addPlayer(character: Character): void {
    this.characters.push(character);
  }
}
