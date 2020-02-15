import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {
  usersData: User[];
  constructor(private userService:UserService,    private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data =>{
      this.usersData=data;
      this.toastr.success("Server Running");
    },
      () =>this.toastr.error("Server Error.") 
    );
  }
  
  
}
