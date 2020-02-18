import { Component, OnInit } from "@angular/core";
import { UserService } from "../../_services/user.service";
import { User } from "../../_models/user";

import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EdituserComponent } from './edituser/edituser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
@Component({
  selector: "app-activeusers",
  templateUrl: "./activeusers.component.html",
  styleUrls: ["./activeusers.component.css"]
})
export class ActiveusersComponent implements OnInit {
  usersData: User[];
  searchText: string;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.usersData = data;
        this.toastr.success("Server Running");
      },
      () => this.toastr.error("Server Error.")
    );
  }
  openUserForm(user: User) {
    const modalRef = this.modalService.open(EdituserComponent,{ size: 'lg',centered: true,});
    modalRef.componentInstance.user = user;
    modalRef.result.then(result => {
      if (!result) return;
      if (user) {
        //Edit
        this.userService.updateUser(result).subscribe(
          (response: User) => {
            if (response) {
              this.toastr.success("Update Success.")
            }
          },
          () => this.toastr.error("Update Failed.")
        );
      } else {
        //Create
        this.userService.addUser(result).subscribe(
          (response: User) => {
            if (response) {
              this.toastr.success("User Added Successfully.")
            }
          },
          () => this.toastr.error("User Creation Failed.")
        );
      }
    });
  }
  onDelete(user: User) {
    const modalRef = this.modalService.open(DeleteuserComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then(result => {
      if(!result) return null;
      this.userService.deleteUser(result).subscribe(
        response => {
          if (response) {
            this.toastr.success("Delete Success");
          }
        },
        () => this.toastr.error("Delete Failed")
      );
    });
  }
}
