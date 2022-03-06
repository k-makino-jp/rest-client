import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  host: string;

  constructor(private http: HttpClient) {
    this.host = "";
  }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response',
    body: null
  };

  get() {
    this.http.get(this.host, this.httpOptions);
  }
}
