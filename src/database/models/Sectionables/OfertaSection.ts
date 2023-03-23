import { DataType, Model } from 'sequelize-typescript';
import { OfertaSection } from '../../../interfaces/Section.interface';
import { sequelize } from '../../database';
import { User } from '../user';

const OfertaSection = sequelize.define<Model, OfertaSection>(
    'ofertaSection',
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
        leftImage: {
            type: DataType.STRING,
        },
        navegate: {
            type: DataType.STRING,
        },
        position: {
            type: DataType.INTEGER,
        },
        principalImage: {
            type: DataType.STRING,
        },
        rigthImage: {
            type: DataType.STRING,
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
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

export { OfertaSection };
