import { DataType, Model } from 'sequelize-typescript';
import { CompanyInterface } from '../../interfaces/Company.interface';
import { sequelize } from '../database';

const Company = sequelize.define<Model, CompanyInterface>(
    'companies',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
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
    },
    {
        timestamps: true,
        deletedAt: true,
    }
);

export { Company };
