import { AuthConfig } from 'angular-oauth2-oidc';
export const authConfig: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'https://wallet.bas.esw.esante.gouv.fr/auth',
    // URL of the SPA to redirect the user to after login
    loginUrl: 'https://wallet.bas.esw.esante.gouv.fr/auth',
    redirectUri: '${environment.appUrl}/login-sucess',
    strictDiscoveryDocumentValidation: false,
    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: 'promotal-v0',
    dummyClientSecret:'8e07f5b5-aa34-4004-a508-8f0c2cffb3ce',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email voucher',
  }