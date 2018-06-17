import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL: string = "http://localhost:55327/api/";

  constructor(private http: HttpClient) { }
  
  postQuestion(question) {
    return this.http.post(this.BASE_URL + '/quiz', question);
  }

}
