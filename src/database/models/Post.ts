import { DataType, Model } from 'sequelize-typescript';
import { PostInterface } from '../../interfaces/Post.interface';
import { sequelize } from '../database';
import { Categoria } from './Categorias';
import { User } from './user';

const Post = sequelize.define<Model, PostInterface>(
    'posts',
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        title: { type: DataType.STRING },
        content: {
            type: DataType.STRING,
            allowNull: false,
        },
        image: {
            type: DataType.STRING,
        },
        updatedBy: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        deletedAt: {
            type: DataType.DATE,
            allowNull: true,
        },
        brief: {
            type: DataType.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

Post.belongsTo(User, {
    as: 'User',
    foreignKey: 'author',
});

Post.belongsToMany(Categoria, {
    as: 'categorias',
    through: 'postCategorias',
});

export { Post };
