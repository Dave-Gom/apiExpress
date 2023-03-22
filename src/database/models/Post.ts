import { DataTypes, Model } from 'sequelize';
import { PostInterface } from '../../interfaces/Post.interface';
import { sequelize } from '../database';
import { Categoria } from './Categorias';
import { User } from './user';

const Post = sequelize.define<Model, PostInterface>(
    'posts',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        title: { type: DataTypes.STRING },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        brief: {
            type: DataTypes.STRING,
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
