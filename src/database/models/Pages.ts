import { DataTypes, Model } from 'sequelize';
import { PageInteface } from '../../interfaces/Pages.interface';
import { sequelize } from '../database';
import { User } from './user';

const Page = sequelize.define<Model, PageInteface>(
    'pages',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: null,
        },
    },
    {
        timestamps: true,
    }
);

export { Page };
