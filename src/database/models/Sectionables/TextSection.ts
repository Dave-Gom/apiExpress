import { DataType, Model } from 'sequelize-typescript';
import { TextSection } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { User } from '../user';

const TextSection = sequelize.define<Model, TextSection>(
    'textSections',
    {
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataType.STRING,
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
        position: {
            type: DataType.INTEGER,
        },
        updatedBy: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
    }
);

export { TextSection };
