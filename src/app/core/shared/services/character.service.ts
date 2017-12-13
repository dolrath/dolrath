import { Injectable } from '@angular/core';
import { sprintf } from 'sprintf-js';
import { Headers, Http, RequestOptions } from '@angular/http';

import { environment } from '../../../../environments/environment';
import { Character, CreateCharacter, Player, Race } from '../models';

@Injectable()
export class CharacterService {
  private options: RequestOptions;
  private characterUrl = environment.api.character;

  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  create(character: CreateCharacter): Promise<Character> {
    const url = sprintf(this.characterUrl.put, character.name);
    const body = JSON.stringify(character);

    return this.http
      .put(url, body, this.options)
      .toPromise()
      .then(response => this.map(response.json()))
      .catch(this.handleError);
  }

  delete(name: string): Promise<void> {
    const url = sprintf(this.characterUrl.delete, name);

    return this.http
      .delete(url, this.options)
      .toPromise()
      .catch(this.handleError);
  }

  getByEmail(email: string): Promise<Array<Character>> {
    const url = sprintf(this.characterUrl.getByEmail, email);

    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => response
        .json()
        .map(this.map))
      .catch(this.handleError);
  }

  getByName(name: string): Promise<Character> {
    const url = sprintf(this.characterUrl.get, name);

    return this.http
      .get(url, this.options)
      .toPromise()
      .then(response => this.map(response.json()))
      .catch(this.handleError);
  }

  private map(data: any): Character {
    const player = new Player(data.player.email);
    const race = new Race(data.race.name);

    return new Character(
      data.name,
      race,
      player,
      data.level,
      data.attr,
      data.hitPoint,
      data.mana);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
