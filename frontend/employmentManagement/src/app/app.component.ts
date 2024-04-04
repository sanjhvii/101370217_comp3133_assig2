import { Component, OnInit } from '@angular/core';
import { gql  } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  /* template: `
    <ul>
      <li *ngFor="let employee of employees$ | async">
        {{ employee.first_name }} ({{ employee.email }})
      </li>
    </ul>
  `, */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees$: Observable<Employee[]>;

  constructor(private apollo: Apollo) {
    
  this.employees$ = this.apollo
    .query<{ getAllEmployees: Employee[] }>({
      query: gql`
        query {
          getAllEmployees {
            first_name
            last_name
            email
            gender
            salary
          }
        }
      `,
    })
    .pipe(map((result) => result.data.getAllEmployees));
  }
}
interface Employee {
  first_name: String
  last_name: String
  email: String
  gender: String
  salary: Number
}
