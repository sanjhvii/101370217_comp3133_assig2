import { Component , OnInit} from '@angular/core';
import { gql  } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  employees$: Observable<Employee[]> = of([]);
  
  constructor(private apollo: Apollo, private router: Router) {}
  
  ngOnInit(){
    this.apollo
      .query<{ getAllEmployees: Employee[] }>({
        query: gql`
          query {
            getAllEmployees {
              _id
              first_name
              last_name
              email
              gender
              salary
            }
          }
        `,
      })
      .pipe(map((result) => result.data.getAllEmployees))
      .subscribe((employees) => {
        this.employees$ = of(employees);
        console.log(employees);
      });
  }  

  add(){
    this.router.navigate(['/add']);
  }
  update(id: any) {
    this.router.navigate(['/update', id]);
  }
  view(id: any) {
    this.router.navigate(['/view', id]);
  }
  delete(id: any) {
    this.router.navigate(['/delete', id]);
  }
  login(){
    this.router.navigate(['/login']);
  }
  signup(){
    this.router.navigate(['/signup']);
  }
  
}

interface Employee {
  _id: String
  first_name: String
  last_name: String
  email: String
  gender: String
  salary: Number
}
