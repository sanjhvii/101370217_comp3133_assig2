import { Component , Input} from '@angular/core';
import { CRUDservicesService } from '../crudservices.service';
import { ActivatedRoute } from '@angular/router';
import { Int } from './../../int_interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  _id='';
  first_name ='';
  last_name='';
  email='';
  gender='';
  salary: Int = { value: 0 };
  employee: any = {_id: ''};

  constructor(private route: ActivatedRoute, private crudService: CRUDservicesService, private router:Router) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('ID')?.toString() ?? '';
    console.log(this.route.snapshot.paramMap);
    this.employee._id = this._id;
    this.crudService.getEmployee(this._id).subscribe(
      (response) => {
        //console.log(this.employee = response);
        this.employee = response;
        
        this.first_name = (response.data as any).getEmployee.first_name;
        console.log(this.first_name);
        this.last_name = (response.data as any).getEmployee.last_name;
        this.email = (response.data as any).getEmployee.email;
        this.gender = (response.data as any).getEmployee.gender;
        this.salary = (response.data as any).getEmployee.salary;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onUpdate() {
    this.crudService.updateEmployee(this._id,this.first_name, this.last_name,
      this.email, this.gender, this.salary).subscribe(result => {
      console.log(result);
      this.router.navigate(['/']);
    });
  }

  

}

interface Employee {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  salary: Int;
}
