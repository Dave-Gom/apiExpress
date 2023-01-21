import { AuthInterface } from "../interfaces/auth.interface";
import { UserInterface } from "../interfaces/user.interface";
import { User } from "../models/user";
import { generateToken } from "../utils/jdt.handler";
import { encript, verify } from "../utils/password.handler";


export const registerNewUser = async ({ email, password, name }: UserInterface) => {
    try {
        const check = await User.findOne({ where: { email } });
        if (check) throw "Usuario ya existe"
        else {
            const passwordHash = await encript(password);
            const registerNewUser = await User.create({ email, password: passwordHash, name });
            if (registerNewUser) {
                return registerNewUser;
            }
            else throw "No se pudo crear el usuario";
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const loginUser = async ({ email, password }: AuthInterface) => {
    try {
        const check = await User.findOne({ where: { email } });
        if (check && check.dataValues) {
            const isCorrect = await verify(password, check.dataValues.password);
            if (isCorrect) {
                const token = await generateToken(check.dataValues.email);
                const data = { token, user: check.dataValues };
                return data;
            }
            return "Contraseña incorrecta";
        }
        else throw "No existe usuario";

    } catch (error) {
        return error;
    }
};

