import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent implements OnInit {
  errorMsg: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }
  
//   show(){
//     this.toastr.success("Hello, I'm the toastr message.")
// }
}
