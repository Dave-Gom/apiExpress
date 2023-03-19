import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import { PageInteface } from '../interfaces/Pages.interface';
import { HeroSection } from './Sectionables/HeroSection';
import { OfertaSection } from './Sectionables/OfertaSection';
import { TextSection } from './Sectionables/TextSection';
import User from './user';

const Page = sequelize.define<Model, PageInteface>(
    'pages',
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: '',
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        updatedBy: {
            type: DataTypes.NUMBER,
            references: {
                model: User,
                key: 'id',
            },
        },
        author: {
            type: DataTypes.NUMBER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

Page.belongsTo(User, { as: 'User', foreignKey: 'author', constraints: false });
Page.hasMany(HeroSection);
Page.hasMany(TextSection);
Page.hasMany(OfertaSection);

export { Page };
