import { AuthInterface } from "./auth.interface";

export interface UserInterface extends AuthInterface {
    id: number;
    name: string;
    description: string;

}