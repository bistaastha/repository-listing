import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetUserRepositoryDetailsService {
  constructor(private http: HttpClient) {}
  getData(reposPerPage: Number, pageNumber: Number): Observable<any> {
    const url = `https://api.github.com/users/andrew/repos?page=${pageNumber}&per_page=${reposPerPage}&sort=updated`;
    const result = this.http.get<any>(url);
    return result;
  }
  getLanguageData(url: string): Observable<any> {
    return this.http.get<any>(url)
  };
  getUserData(): Observable<any> {
    const url = "https://api.github.com/users/andrew"
    return this.http.get<any>(url)
  }
}
