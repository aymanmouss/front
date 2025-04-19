import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${path}`);
  }
  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${path}`, body);
  }
  put<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${path}`, body);
  }
  delete<T>(path: string, body?: any): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${path}`, { body });
  }
}
