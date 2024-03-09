import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiUrl = 'YOUR_API_URL';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    const url = `${this.apiUrl}/recipes`; // Adjust the URL as per your API endpoint
    return this.http.get<any>(url);
  }
}
