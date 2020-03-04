import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../_services/token-storage.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private modalService: NgbModal,
    ) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }


  openEditProfile(){
    this.modalService.open(EditProfileComponent,{ size: 'lg',centered: true,});
  }

  

}
