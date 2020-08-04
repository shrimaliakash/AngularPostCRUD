import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './login.service.ts';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor( private router: Router, private loginService: LoginService ) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	    const user = this.loginService.userValue;
	    if (user) {
	        // logged in so return true
	        return true;
	    }

	    // not logged in so redirect to login page with the return url
	    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
	    return false;
	}
  
}
