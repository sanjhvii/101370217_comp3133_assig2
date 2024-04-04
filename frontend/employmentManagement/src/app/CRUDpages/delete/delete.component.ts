import { Component } from '@angular/core';
import { CRUDservicesService } from '../crudservices.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  _id='';
  constructor(
    private route: ActivatedRoute, 
    private crudService: CRUDservicesService,
    private router:Router) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('ID')?.toString() ?? '';
    console.log(this._id);
  }
  onCancel(){
    this.router.navigate(['/']);
  }
  onDelete() {
    this.crudService.deleteEmployee(this._id).subscribe(result => {      
      this.router.navigate(['/']);
    });
  }
}
