import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Constants } from '../app.constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private readonly tokenEndpoint: string = `${Constants.contextPath}/auth/signin`;
    private readonly tokenName: string = 'token';
    public token: Token;
    public authHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private router: Router) {
        if(this.isTokenInStorage()) {
            this.token = JSON.parse(localStorage.getItem(this.tokenName));
            this.authHeaders.delete('Authorization');
            this.authHeaders.append('Authorization', `Bearer ${this.token.accessToken}`);
        }

        setInterval(() => {
            if (!this.isTokenInStorage() && this.isTokenSet())
                this.router.navigate(['logout']);
        }, 3000);
    }

    public login(username: string, password: string) {
        console.log(username, password);
    }

    public isTokenInStorage(): boolean {
        return !!localStorage.getItem(this.tokenName);
    }

    public isTokenSet(): boolean {
        return this.token != null;
    }

    public removeAuth(): void {
        delete this.token;
        this.authHeaders.delete('Authorization');
        localStorage.clear();
    }

    public hasAuthority(authority: string): boolean {
        return this.token != null && this.token.authorities && this.token.authorities.includes(authority);
    }

    public hasAnyAuthority(...authorities: string[]): boolean {
        return authorities == null || (this.token != null && this.token.authorities && authorities.some(authority => this.hasAuthority(authority)));
    }

    public performRedirection(): void {
        this.router.navigate(['']);
    }
}

export class Token {
    accessToken: string;
    tokenType: string;
    user: User;
    authorities: string[];
}