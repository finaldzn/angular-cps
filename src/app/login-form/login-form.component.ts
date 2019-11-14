import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }
  public login() {
    this.oauthService.initLoginFlow();
}

public logoff() {
    this.oauthService.logOut();
}

public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims;
}

}
