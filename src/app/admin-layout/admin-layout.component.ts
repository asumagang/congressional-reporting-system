import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from "../_services/token-storage.service";
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showADMIN = false;
  showPDPO = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showADMIN = this.roles.includes("ROLE_ADMIN");
      this.showPDPO = this.roles.includes("ROLE_PDPO");

      this.username = user.username;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();

  }
  reloadPage() {
    window.location.reload();
  }

}
