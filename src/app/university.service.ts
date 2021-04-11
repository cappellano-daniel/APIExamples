import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  searchUniversities(searchTerm: string = 'michigan') {
    return this.http.get(`http://universities.hipolabs.com/search?name=${searchTerm}`);
  }

}
