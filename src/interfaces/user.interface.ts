import { AuthInterface } from "./Auth.interface";

export interface UserInterface extends AuthInterface {
    id: number;
    name: string;
    description: string;

}