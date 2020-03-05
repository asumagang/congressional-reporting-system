import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/_models/program';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  @Input()
  user: User = {
    id: 1,
    firstname: "Adrian ",
    lastname:" Sumagang",
    mobileno:"09967812345",
    username:"asumagang",
    email:"adrian@gmail.com",
    password:"asddddf",
    address:"cebu city"
  };
  newFirstname: string;
 

  headTitle: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.headTitle = this.user ? "Edit User" : "Create User";
    this.newFirstname = this.user ? this.user.firstname : "";
  }
  // submit() {
  //   if (this.user) {
  //     //Update program
  //     const updateUser: User = {
  //       id: this.user.id,
  //       firstname: this.newFirstname,
  //     };
  //     this.activeModal.close(updateUser);
  //   } else {
  //     //Create User
  //     const newUser: User = {
  //       id:null ,
  //       firstname: this.newFirstname,
  //     };
  //     this.activeModal.close(newUser);
  //   }
  // }
}
