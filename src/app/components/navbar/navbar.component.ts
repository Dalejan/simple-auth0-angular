import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private guardService: AuthGuardService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

}
