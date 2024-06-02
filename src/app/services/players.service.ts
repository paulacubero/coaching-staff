import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from '../models/coaches.model';
import { PLAYERS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  visibleEditDialog: boolean = false;
  private apiUrl = 'http://localhost:3000/api/players';

  constructor(private _http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
    // return this._http.get<Player[]>(this.apiUrl);
  }

  addPlayer(player: Player): Observable<string> {
    console.log('Añado jugadora', player);
    return of('');
    // return this._http.post<string>(this.apiUrl, player);
  }

  editPlayer(player: Player): Observable<string> {
    console.log('Edito jugadora', player);
    return of('');
    // const url = `${this.apiUrl}/${player.id}`;
    // return this._http.put<string>(url, player);
  }

  deletePlayer(player: Player): Observable<string> {
    console.log('Elimino jugadora', player);
    return of('');
    // const url = `${this.apiUrl}/${player.id}`;
    // return this._http.delete<string>(url);
  }
}
