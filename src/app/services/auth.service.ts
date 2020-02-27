import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Constants } from '../app.constants';

@Injectable()
export class AuthService {
    private readonly tokenEndpoint: string = `${Constants.contextPath}/auth/signin`;
    private readonly tokenName: string = 'token';

    public login(username: string, password: string) {
        console.log(username, password);
    }
}

export class Token {
    accessToken: string;
    tokenType: string;
    user: User;
}