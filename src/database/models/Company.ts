import { DataType, Model } from 'sequelize-typescript';
import { CompanyInterface } from '../../interfaces/Company.interface';
import { sequelize } from '../database';
import { User } from './user';

const Company = sequelize.define<Model, CompanyInterface>(
    'companies',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        about: {
            type: DataType.STRING,
        },
        brand: {
            type: DataType.STRING,
        },
        logo: {
            type: DataType.STRING,
        },
        since: {
            type: DataType.STRING,
        },
        description: {
            type: DataType.STRING,
        },
        author: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        updatedBy: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
        deletedAt: true,
    }
);

export { Company };
