import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityService } from './university.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'API-App';
  
  universities : Observable<any> | null = null;
  searchText: string = '';


  constructor(private service: UniversityService) {

  }

  
  ngOnInit() {
    this.universities = this.service.searchUniversities(null)
  }

  search() {
    this.universities = this.service.searchUniversities(this.searchText);
  }


}
