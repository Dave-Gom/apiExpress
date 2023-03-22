import { DataTypes, Model } from 'sequelize';
import { AdminEnum, UserInterface } from '../../interfaces/User.interface';
import { sequelize } from '../database';
import Page from './Pages'; // Movido aquí

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

User.hasMany(Page, {
    foreignKey: 'author',
    as: 'pages',
});
User.hasMany(Page, {
    foreignKey: 'updatedBy',
    as: 'updatedPages',
});

export default User;
