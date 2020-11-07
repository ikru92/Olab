import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private _baseUrl = "http://localhost:5000/api";
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getAll(resourceType): Observable<any> {
    return this.http.get(`${this._baseUrl}/${resourceType}`);
  }

  get(resourceType, id): Observable<any> {
    return this.http.get(`${this._baseUrl}/${resourceType}/${id}`);
  }

  create(resourceType, data): Observable<any> {
    return this.http.post(`${this._baseUrl}/${resourceType}`, data);
  }

  update(resourceType, id, data): Observable<any> {
    return this.http.put(`${this._baseUrl}/${resourceType}/${id}`, data);
  }

  delete(resourceType, id): Observable<any> {
    return this.http.delete(`${this._baseUrl}/${resourceType}/${id}`);
  }
}
