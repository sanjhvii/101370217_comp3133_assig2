import { Component } from '@angular/core';
import { CRUDservicesService } from '../crudservices.service';
import { Int } from 'src/app/int_interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  first_name ='';
  last_name='';
  email='';
  gender='';
  salary: Int = { value: 0 };

  constructor(private crudService: CRUDservicesService, private router:Router) { }

  onAdd() {
    this.crudService.addEmployee(this.first_name, this.last_name,
      this.email, this.gender, this.salary).subscribe(result => {
      console.log(result);
      if(result.data){
        this.router.navigate(['/']);
      }
    });
  }
}
