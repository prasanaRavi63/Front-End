import { Injectable } from  '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Login } from './login';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()

export  class  APIService {

    constructor(private  httpClient:  HttpClient) {}

    API_URL  =  'http://localhost:8081';
    getUser(user:Login): Observable<Login> {
      return this.httpClient.post<Login>(`${this.API_URL}/api/login`,user,httpOptions)
  }
}


