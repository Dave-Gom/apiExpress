import { Page } from './models/Pages';
import { User } from './models/user';

User.hasMany(Page, {
    foreignKey: 'author',
    as: 'pages',
});
User.hasMany(Page, {
    foreignKey: 'updatedBy',
    as: 'updatedPages',
});

Page.belongsTo(User, {
    as: 'authorDetails',
    foreignKey: 'author',
});
Page.belongsTo(User, {
    as: 'updatedByDetails',
    foreignKey: 'updatedBy',
});
