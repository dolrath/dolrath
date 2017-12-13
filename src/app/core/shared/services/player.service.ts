import { Injectable } from '@angular/core';
import { sprintf } from 'sprintf-js';
import { Headers, Http, RequestOptions } from '@angular/http';

import { environment } from '../../../../environments/environment';
import { Player } from '../models';

@Injectable()
export class PlayerService {
  private options: RequestOptions;
  private playerUrl = environment.api.player;

  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  create(player: Player): Promise<Player> {
    const url = sprintf(this.playerUrl.put, player.email);
    const body = JSON.stringify(player);

    return this.http
      .put(url, body, this.options)
      .toPromise()
      .then(response => this.map(response.json()))
      .catch(this.handleError);
  }

  delete(email: string): Promise<void> {
    const url = sprintf(this.playerUrl.delete, email);

    return this.http
      .delete(url, this.options)
      .toPromise()
      .catch(this.handleError);
  }

  get(): Promise<Array<Player>> {
    return this.http
      .get(this.playerUrl.getAll, this.options)
      .toPromise()
      .then(response => response
        .json()
        .map(this.map))
      .catch(this.handleError);
  }

  getByEmail(email: string): Promise<Player> {
    const url = sprintf(this.playerUrl.get, email);

    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => this.map(response.json()))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  private map(data: any): Player {
    return new Player(data.email);
  }
}
