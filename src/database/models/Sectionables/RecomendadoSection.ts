import { DataType, Model } from 'sequelize-typescript';
import { SectionRecomendadoInterface } from '../../../interfaces/Post.interface';
import { sequelize } from '../../database';
import { User } from '../user';

const SectionRecomendado = sequelize.define<Model, SectionRecomendadoInterface>(
    'sectionRecomendado',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataType.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
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
        deletedAt: true,
    }
);

export { SectionRecomendado };
