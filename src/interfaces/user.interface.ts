import { AuthInterface } from './Auth.interface';

export enum AdminEnum {
    SU = 'SU',
    ADMIN = 'ADMIN',
}

export interface UserInterface extends AuthInterface {
    id: number;
    name: string;
    email: string;
    password: string;
    birthDate: string;
    role: keyof AdminEnum;
}
