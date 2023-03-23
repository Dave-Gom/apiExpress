import { DataTypes } from 'sequelize';
import { Model } from 'sequelize-typescript';
import { TextSection } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { User } from '../user';

const TextSection = sequelize.define<Model, TextSection>(
    'textSections',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.STRING,
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
        position: {
            type: DataTypes.INTEGER,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
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
