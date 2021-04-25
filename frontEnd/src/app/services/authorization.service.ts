import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private jwtHelperService:JwtHelperService ) { }

  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
  
    // get token from local storage or state management
   const token = localStorage.getItem('token');
   console.log(token)
  
      // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(token);
    console.log(decodeToken);
    
  
  // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }
    let arr=decodeToken['AUTHORITIES_KEY'].split(",");
    console.log(arr);
if (arr.length==2){
  return allowedRoles.includes(arr[0]) ||allowedRoles.includes(arr[1]);

}
if (arr.length==1){
  return allowedRoles.includes(arr[0]);
}
 // console.log(decodeToken['jti'].split(",")[0].replace("[",""));
 // console.log(decodeToken['jti'].split(",")[1].replace("]","").replace(" ",""));
 // console.log(allowedRoles.includes(decodeToken['AUTHORITIES_KEY']));
  
  // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
   // return allowedRoles.includes(arr[0]);
  }
}
