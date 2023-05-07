import { Model } from 'sequelize-typescript';
import { User } from '../database/models/user';
import { AuthInterface, loginResponse } from '../interfaces/Auth.interface';
import { UserInterface } from '../interfaces/User.interface';
import { generateToken } from '../utils/jdt.handler';
import { encript, verify } from '../utils/password.handler';

export const registerNewUser = async (userData: UserInterface) => {
    const { email, password } = userData;
    try {
        const check = await User.findOne({ where: { email } });
        if (check) throw 'Usuario ya existe';
        else {
            const passwordHash = await encript(password);
            const registerNewUser = await User.create<Model<UserInterface>>({ ...userData, password: passwordHash });
            if (registerNewUser) {
                return registerNewUser;
            } else throw 'No se pudo crear el usuario';
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const loginUser = async ({ email, password }: AuthInterface) => {
    try {
        const check = await User.findOne({ where: { email } });
        if (check && check.dataValues) {
            const isCorrect = await verify(password, check.dataValues.password);
            if (isCorrect) {
                const token = await generateToken(check.dataValues.email);
                const data: loginResponse = { token, data: check.dataValues };
                return data;
            }
        }
        const incorrect: loginResponse = { token: null, data: 'Usuario o contraseña incorrectos' };
        return incorrect;
    } catch (error) {
        const incorrect: loginResponse = { token: null, data: `${error}` };
        return incorrect;
    }
};
