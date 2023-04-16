import { UserInterface } from './User.interface';

export interface AuthInterface {
    email: string;
    password: string;
}

export interface loginResponse {
    token: string | null;
    data: UserInterface | string;
}
