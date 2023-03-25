import { DataType, Model } from 'sequelize-typescript';
import { ListInterface } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { User } from '../user';

const ListSection = sequelize.define<Model, ListInterface>(
    'listSection',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
        description: {
            type: DataType.STRING,
            allowNull: true,
            defaultValue: null,
        },
        position: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        limit: {
            type: DataType.INTEGER,
        },
        author: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
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

export { ListSection };
