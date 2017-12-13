import { Player, Race } from '.';

export class CreateCharacter {
  constructor(
    readonly name: string,
    readonly race: Race,
    readonly player: Player) { }
}
