import { Player } from './player';

export class Room {
  readonly players: Player[] = [];

  constructor(readonly name: string) { }

  addPlayer(player: Player): void {
    this.players.push(player);
  }
}
