import { Dice, Character } from '.';

export class Roll {
  constructor(
    readonly dice: Dice,
    readonly character: Character) { }
}
