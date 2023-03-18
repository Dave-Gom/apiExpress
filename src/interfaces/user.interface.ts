import { AuthInterface } from './Auth.interface';

export enum AdminEnum {
    SU = 'SU',
    ADMIN = 'ADMIN',
}

export interface UserInterface extends AuthInterface {
    id: number;
    name: string;
    birthDate: Date;
    nacionalidad: string;
    direccion: string;
    ciudad: string;
    ocupacion: string;
    role: keyof AdminEnum;
}
