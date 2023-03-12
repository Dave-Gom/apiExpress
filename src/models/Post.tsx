import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { PostInterface } from '../interfaces/Post';

export const Post = sequelize.define<Model, PostInterface>('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: { type: DataTypes.STRING },
    mediaContent: {
        type: DataTypes.STRING,
    },
});
