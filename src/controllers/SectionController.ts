import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { Page } from '../database/models/Pages';
import { User } from '../database/models/user';
import { PageInstance } from '../interfaces/Instances.interface';
import { SectionTypesEnum } from '../interfaces/Section.interface';
import { UserInterface } from '../interfaces/User.interface';
import {
    addPosts,
    getHeros,
    getOfertas,
    getPostList,
    getRecomendados,
    getTextoSections,
    insertHeroSection,
    insertListSection,
    insertOfertaSection,
    insertRecomendadoSection,
    insertTextSection,
    putListOptions,
} from '../services/Section.services';
import { handleHttp } from '../utils/error.handler';

export const createSection = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        const page = await Page.findByPk<PageInstance>(params.pageId);
        if (user) {
            switch (params.type) {
                case SectionTypesEnum.HERO:
                    const hero = await insertHeroSection(
                        {
                            ...body,
                        },
                        page,
                        user.dataValues.id
                    );
                    res.send(hero);
                    break;
                case SectionTypesEnum.OFERTA:
                    const oferta = await insertOfertaSection(
                        {
                            ...body,
                        },
                        page,
                        user.dataValues.id
                    );
                    res.send(oferta);
                    break;
                case SectionTypesEnum.POSTS:
                    const posts = await insertListSection({ ...body }, page, user.dataValues.id);
                    res.send(posts);
                    break;
                case SectionTypesEnum.RECOMENDADO:
                    const recomendado = await insertRecomendadoSection({ ...body }, page, user.dataValues.id);
                    res.send(recomendado);
                    break;
                case SectionTypesEnum.TEXTO:
                    const textSection = await insertTextSection(
                        {
                            ...body,
                        },
                        page,
                        user.dataValues.id
                    );
                    res.send(textSection);
                    break;
                default:
                    throw new Error(`Tipo de Seccion no existe: ${params.type}`);
            }
        } else if (!user) {
            throw new Error(`Usuario no existe ${body.user}`);
        } else {
            throw new Error(`La pagina no existe ${params.pageId}`);
        }
    } catch (e) {
        handleHttp(res, `ERROR_POST_SECTION: ${e}`);
    }
};

export const readSection = async ({ body, params }: Request, res: Response) => {
    const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
    switch (params.type) {
        case SectionTypesEnum.HERO:
            const hero = await getHeros(params.type);
            res.send(hero);
            break;
        case SectionTypesEnum.OFERTA:
            const oferta = await getOfertas(params.type);
            res.send(oferta);
            break;
        case SectionTypesEnum.POSTS:
            const PostsLists = await getPostList(params.type);
            res.send(PostsLists);
            break;
        case SectionTypesEnum.RECOMENDADO:
            const Recomendados = await getRecomendados();
            res.send(Recomendados);
            break;
        case SectionTypesEnum.TEXTO:
            const textos = await getTextoSections();
            res.send(textos);
            break;
        default:
            handleHttp(res, `ERROR_READ_SECTION: ${params.type}`);
    }
};

export const updateSection = async ({ body, params }: Request, res: Response) => {
    const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
    if (user) {
        switch (params.type) {
            case SectionTypesEnum.POSTS:
                const Posts = await putListOptions(body, parseInt(params.id, 10), user?.dataValues.id);
                res.send(Posts);
                break;
        }
    }
};

export const addListPosts = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        if (user) {
            const Posts = await addPosts(body.posts, parseInt(params.id, 10), user.dataValues.id);
            res.send(Posts);
        }
        throw 'No user';
    } catch (e) {
        handleHttp(res, `ERROR_ADD_POSTS_TOLIST_SECTION: ${e}`);
    }
};
