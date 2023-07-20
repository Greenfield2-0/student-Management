import { Component } from '@angular/core';
import { Stud } from "../../stud";
import { Router } from '@angular/router';
import { StudServiceService } from "../../stud-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  students: Stud[];
  searchName: string = ''; 

  constructor(private service: StudServiceService, private route: Router) {
    this.students = [];
  }

  getOne = () => {
    if (this.searchName.trim() !== '') {
      this.service.getOneStudent(this.searchName).then((res) => {
        this.students = [res.data];
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
