import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportbookService {

  constructor(private http: HttpClient) { }

  public getSPortsBookData(): Observable<any> {
    return this.http.get("assets/tree.json");
  }


}
