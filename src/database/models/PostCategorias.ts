import { DataTypes, Model } from 'sequelize';
import { PostCategoriasInterface } from '../../interfaces/Categoria.interface';
import { sequelize } from '../database';
import { Categoria } from './Categorias';
import { Post } from './Post';

const PostCategorias = sequelize.define<Model, PostCategoriasInterface>(
    'postCategorias',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
