import { Categoria } from './models/Categorias';
import { Page } from './models/Pages';
import { Post } from './models/Post';
import { HeroSection } from './models/Sectionables/HeroSection';
import { ListSection } from './models/Sectionables/List.section';
import { OfertaSection } from './models/Sectionables/OfertaSection';
import { SectionRecomendado } from './models/Sectionables/RecomendadoSection';
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

//posts y users
Post.belongsTo(User, {
    foreignKey: 'author',
});

Post.belongsTo(User, {
    foreignKey: 'updatedBy',
});

User.hasMany(Post, {
    foreignKey: 'author',
});

User.hasMany(Post, {
    foreignKey: 'updatedBy',
});

//categorias y users
Categoria.belongsTo(User, {
    foreignKey: 'author',
});

Categoria.belongsTo(User, {
    foreignKey: 'updatedBy',
});

User.hasMany(Categoria, {
    foreignKey: 'author',
});

User.hasMany(Categoria, {
    foreignKey: 'updatedBy',
});

// List Section con user
User.hasMany(ListSection, {
    foreignKey: 'author',
});
ListSection.belongsTo(User, {
    foreignKey: 'author',
});

User.hasMany(ListSection, {
    foreignKey: 'updatedBy',
});

ListSection.hasMany(ListSection, {
    foreignKey: 'updatedBy',
});

//Recomendado section y user
SectionRecomendado.belongsTo(User, {
    foreignKey: 'author',
});

SectionRecomendado.belongsTo(User, {
    foreignKey: 'author',
});

User.hasMany(SectionRecomendado, {
    foreignKey: 'author',
});

User.hasMany(SectionRecomendado, {
    foreignKey: 'author',
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

// List Sections y pages

Page.belongsToMany(ListSection, {
    through: 'PageLists',
});

ListSection.belongsToMany(Page, {
    through: 'PageLists',
});

// Listsections y Posts

ListSection.belongsToMany(Post, {
    through: 'listPost',
});

Post.belongsToMany(ListSection, {
    through: 'listPost',
});

//categorias y posts
Categoria.belongsToMany(Post, {
    through: 'postCategorias',
});

Post.belongsToMany(Categoria, {
    through: 'postCategorias',
});

//Recomendados y paginas
SectionRecomendado.belongsToMany(Page, {
    through: 'recomendadosPages',
});

Page.belongsToMany(SectionRecomendado, {
    through: 'recomendadosPages',
});

SectionRecomendado.belongsToMany(Post, { through: 'postRecomendados' });

Post.belongsToMany(SectionRecomendado, { through: 'postRecomendados' });
