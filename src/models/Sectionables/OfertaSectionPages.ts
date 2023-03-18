import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../database/database';
import { OfertaSections } from '../../interfaces/SectionInterface';
import { Page } from '../Pages';

const OfertasSectionPages = sequelize.define<Model, OfertaSections>(
    'ofertasSectionPages',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ofertaSectionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model:
            // }
        },
        pageId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Page,
                key: 'id',
            },
        },
    },
    {
        timestamps: true,
    }
);

export { OfertasSectionPages };
