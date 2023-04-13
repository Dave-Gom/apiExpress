import { DataType, Model } from 'sequelize-typescript';
import { AdminEnum, UserInterface } from '../../interfaces/User.interface';
import { sequelize } from '../database';

const User = sequelize.define<Model, UserInterface>(
    'users',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataType.DATE,
            allowNull: false,
        },
        ciudad: {
            type: DataType.STRING,
        },
        direccion: {
            type: DataType.STRING,
        },
        nacionalidad: {
            type: DataType.STRING,
        },
        ocupacion: {
            type: DataType.STRING,
        },
        role: {
            type: DataType.ENUM(AdminEnum.SU, AdminEnum.ADMIN),
            allowNull: false,
            defaultValue: AdminEnum.ADMIN,
        },
    },
    {
        timestamps: true,
        deletedAt: true,
    }
);

export { User };
