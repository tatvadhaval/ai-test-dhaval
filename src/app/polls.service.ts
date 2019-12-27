import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = ' https://hn.algolia.com/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(endpoint + 'search_by_date?tags=story');
  }
}
