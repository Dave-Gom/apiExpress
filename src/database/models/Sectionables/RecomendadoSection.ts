import { DataType, Model } from 'sequelize-typescript';
import { SectionRecomendadoInterface } from '../../../interfaces/Post.interface';
import { sequelize } from '../../database';
import { Post } from '../Post';
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
        postId: {
            type: DataType.INTEGER,
            references: {
                model: Post,
                key: 'id',
            },
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
