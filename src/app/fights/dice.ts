import { Player } from './';

export class Dice {
  constructor(
    readonly value: number,
    readonly player: Player) { }
}