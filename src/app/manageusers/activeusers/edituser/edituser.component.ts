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
    firstname: "Tanjiro ",
    lastname: " Kamado",
    username: " tkamado",
    email: "tkamado@gmail.com",
    mobileno:"09555187007",
    address:"talamban,Cebu",
    password:"12345678"
  };
  newFirstname: string;
  newLastname: string;
  newUsername: string;
  newMobileno:string;
  newAddress:string;
  newPassword:string;

  headTitle: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.headTitle = this.user ? "Edit User Details" : "Add New User";
    this.newFirstname = this.user ? this.user.firstname : "";
    this.newLastname = this.user ? this.user.lastname : "";
    this.newAddress = this.user ? this.user.address : "";
    this.newUsername = this.user ? this.user.username : "";
    this.newMobileno = this.user ? this.user.mobileno: "";
    this.newPassword = this.user ? this.user.password:"";
  }
  submit() {
    if (this.user) {
      //Update program
      const updateUser: User = {
        id: this.user.id,
        firstname: this.newFirstname,
        lastname: this.newLastname,
        username: this.newUsername,
        address: this.newAddress,
        mobileno:this.newMobileno
      };
      this.activeModal.close(updateUser);
    } else {
      //Create User
      const newUser: User = {
        id:null ,
        firstname: this.newFirstname,
        lastname: this.newLastname,
        username: this.newUsername,
        address: this.newAddress,
        mobileno: this.newMobileno,
        password:this.newPassword,
      };
      this.activeModal.close(newUser);
    }
  }
}
