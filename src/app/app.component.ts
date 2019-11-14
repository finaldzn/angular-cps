import { Component } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cps';
  constructor(private oauthService: OAuthService) {
    this.configure()
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.tryLogin();
  }
}
