import { log } from 'console';
import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { UserInterface } from '../interfaces/User.interface';

export const readUsers = async () => {
    try {
        const users = User.findAll<Model<UserInterface>>();
        if (users) {
            return users;
        } else {
            return new Error('No se encontraron usuarios');
        }
    } catch (error) {
        log('ReadUsers Error');
    }
};
