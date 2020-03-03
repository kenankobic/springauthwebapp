import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class InsideGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (!this.authService.isTokenSet) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot) {
        if (!route.data.authorities || this.authService.hasAnyAuthority(...route.data.authorities))
            return true;

        this.authService.performRedirection();

        return false;
    }
}