import { Component } from '@angular/core';
import { CRUDservicesService } from '../crudservices.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  _id='';
  employee: any = {_id: ''};

  constructor(
    private route: ActivatedRoute, 
    private crudService: CRUDservicesService,
    private router:Router) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('ID')?.toString() ?? '';
    this.crudService.getEmployee(this._id).subscribe(result => {
      this.employee=(result.data as any).getEmployee;
    });
  }

  onReturn(){
    this.router.navigate(['/']);
  }
}

