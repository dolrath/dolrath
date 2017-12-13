import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { environment } from '../../../../environments/environment';
import { Race } from '../models';

@Injectable()
export class RaceService {
  private options: RequestOptions;
  private raceUrl = environment.api.race;

  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  get(): Promise<Array<Race>> {
    return this.http
      .get(this.raceUrl.getAll, this.options)
      .toPromise()
      .then(response => response
        .json()
        .map(this.map))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  private map(data: any): Race {
    return new Race(data.name);
  }
}
