import { Player, Race } from '.';

export class Character {
  constructor(
    readonly name: string,
    readonly race?: Race,
    readonly player?: Player,
    readonly level?: number,
    readonly attr?: any,
    readonly hitPoint?: any,
    readonly mana?: any) { }
}
