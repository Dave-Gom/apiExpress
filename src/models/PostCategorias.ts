import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { PostCategorias as PostCategoriasInteface } from '../interfaces/Categoria.interface';
import { Categoria } from './Categorias';
import { Post } from './Post';

const PostCategorias = sequelize.define<Model, PostCategoriasInteface>(
    'postCategorias',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        idCategoria: {
            type: DataTypes.INTEGER,
            references: {
                model: Categoria,
                key: 'id',
            },
        },
        idPost: {
            type: DataTypes.INTEGER,
            references: {
                model: Post,
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
    }
);

export { PostCategorias };
