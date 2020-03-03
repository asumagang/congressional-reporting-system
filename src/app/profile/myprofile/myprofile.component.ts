import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

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
