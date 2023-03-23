
import { DataType, Model } from 'sequelize-typescript';
import { PageInteface } from '../../interfaces/Pages.interface';
import { sequelize } from '../database';
import { User } from './user';

const Page = sequelize.define<Model, PageInteface>(
    'pages',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            defaultValue: '',
        },
        active: {
            type: DataType.BOOLEAN,
            defaultValue: false,
        },
        updatedBy: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        author: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        deletedAt: {
            type: DataType.DATE,
            defaultValue: null,
        },
    },
    {
        timestamps: true,
    }
);

export { Page };
