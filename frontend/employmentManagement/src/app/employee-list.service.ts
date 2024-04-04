import { Injectable } from '@angular/core';
import { gql  } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private apollo: Apollo, http: HttpClient) { }

  getAllEmployees() {
    const query = gql`
      query getAllEmployees() {
        getAllEmployees()
      }
    `;

    return this.apollo.query({
      query,
      variables: {}
    });
  }
}
