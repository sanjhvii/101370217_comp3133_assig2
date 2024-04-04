import { Injectable } from '@angular/core';
import { gql  } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo, http: HttpClient) { }

  login(username: string, password: string) {
    const query = gql`
      query Login($username: String!, $password: String!) {
        login(username: $username, password: $password)
      }
    `;

    return this.apollo.query({
      query,
      variables: { username, password }
    });
  }

  signup(username: string, email:string, password: string) {
    const mutation = gql`
      mutation Signup($username: String!, $email: String!, $password: String!) {
        signup(username: $username, email: $email, password: $password) {
          username
          email
          password
        }
      }
    `;

    return this.apollo.mutate({
      mutation,
      variables: { username, email, password }
    });
  }


}
