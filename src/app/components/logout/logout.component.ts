import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'logout-component',
  template: ``
})
export class LogoutComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.authService.removeAuth();
        this.router.navigate(['login']);
    }
}
