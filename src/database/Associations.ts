import { Page } from './models/Pages';
import { HeroSection } from './models/Sectionables/HeroSection';
import { OfertaSection } from './models/Sectionables/OfertaSection';
import { TextSection } from './models/Sectionables/TextSection';
import { User } from './models/user';

// uno a muchos

//relaciones user a page
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

//relaciones user a hero
User.hasMany(HeroSection, {
    foreignKey: 'author',
});

User.hasMany(HeroSection, {
    foreignKey: 'updatedBy',
});

HeroSection.belongsTo(User, {
    foreignKey: 'author',
    constraints: false,
});

HeroSection.belongsTo(User, {
    foreignKey: 'updatedBy',
});

//OfertaSection y users

User.hasMany(OfertaSection, {
    foreignKey: 'author',
});

OfertaSection.belongsTo(User, {
    foreignKey: 'author',
});

User.hasMany(OfertaSection, {
    foreignKey: 'updatedBy',
});

OfertaSection.belongsTo(User, {
    foreignKey: 'updatedBy',
});

//TextSection con user

User.hasMany(TextSection, {
    foreignKey: 'author',
});

TextSection.belongsTo(User, {
    foreignKey: 'author',
});

User.hasMany(TextSection, {
    foreignKey: 'updatedBy',
});
TextSection.belongsTo(User, {
    foreignKey: 'updatedBy',
});

//many to many
Page.belongsToMany(HeroSection, {
    through: 'pageHero',
    as: 'hero',
});

HeroSection.belongsToMany(Page, {
    through: 'pageHero',
    as: 'pages',
});

Page.belongsToMany(OfertaSection, {
    through: 'PageOferta',
});

OfertaSection.belongsToMany(Page, {
    through: 'PageOferta',
});

Page.belongsToMany(TextSection, {
    through: 'pageTexts',
});

TextSection.belongsToMany(Page, {
    through: 'pageTexts',
});
