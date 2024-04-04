import { Injectable } from '@angular/core';
import { gql  } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Int } from '../int_interface';



interface Employee {
  _id: String
  first_name: String
  last_name: String
  email: String
  gender: String
  salary: Int
}

interface GetEmployeeResponse {
  getEmployee: Employee;
}

@Injectable({
  providedIn: 'root'
})

export class CRUDservicesService {

  constructor(private apollo: Apollo) { }

  getEmployee(_id: String){
    const query = gql`
      query getEmployee($_id: String!) {
        getEmployee(_id: $_id){
          first_name
          last_name
          email
          gender
          salary
        }
      }
    `;

    return this.apollo.query({
      query,
      variables: { _id }
    });
  }
  
  addEmployee(first_name: String, last_name: String, email: String, gender: String, salary: Int) {
    const mutation = gql`
      mutation addEmployee($first_name: String!, $last_name: String!, $email: String, 
        $gender: String!, $salary: Int) {
        addEmployee(first_name:$first_name, last_name:$last_name, email:$email,
          gender:$gender, salary:$salary) {
          first_name
          last_name
          email
          gender
          salary
        }
      }
    `;

    return this.apollo.mutate({
      mutation,
      variables: { first_name, last_name, email, gender, salary}
    });
  }

  deleteEmployee(_id: string) {
    const mutation = gql`
      mutation deleteEmployee($_id: String!) {
        deleteEmployee(_id: $_id)
      }
    `;

    return this.apollo.mutate({
      mutation,
      variables: { _id }
    });
  }

  updateEmployee(_id: String, first_name: String, last_name: String, email: String, gender: String, salary: Int) {
    const mutation = gql`
      mutation updateEmployee($_id:String!, $first_name: String!, $last_name: String!, $email: String, 
        $gender: String!, $salary: Int) {
        updateEmployee(_id:$_id, first_name:$first_name, last_name:$last_name, email:$email,
          gender:$gender, salary:$salary) 
      }
    `;

    return this.apollo.mutate({
      mutation,
      variables: { _id, first_name, last_name, email, gender, salary}
    });
  }

}
