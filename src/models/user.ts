import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { AdminEnum, UserInterface } from '../interfaces/user.interface';

const User = sequelize.define<Model, UserInterface>('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ciudad: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    nacionalidad: {
        type: DataTypes.STRING,
    },
    ocupacion: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.ENUM(AdminEnum.SU, AdminEnum.ADMIN),
        allowNull: false,
        defaultValue: AdminEnum.ADMIN,
    },
});

export default User;
