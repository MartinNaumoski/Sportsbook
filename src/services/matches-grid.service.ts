import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchesGridService {
  constructor(private http: HttpClient) { }

  takeLeagueData(id : number) {
    let leagueDataString = 'league_' + id + '.json';
    return this.http.get('assets/matches/' + leagueDataString);
  }


  public takeLayoutsData(): Observable<any> {
    return this.http.get("assets/layout.json");
  }
}
