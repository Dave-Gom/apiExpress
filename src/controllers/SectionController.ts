import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { Page } from '../database/models/Pages';
import User from '../database/models/user';
import { PageInteface } from '../interfaces/Pages.interface';
import { SectionTypesEnum } from '../interfaces/Section.interface';
import { UserInterface } from '../interfaces/user.interface';
import { insertHeroSection, insertOfertaSection, insertTextSection } from '../services/Section.services';
import { handleHttp } from '../utils/error.handler';

export const postSection = async ({ body, params }: Request, res: Response) => {
    try {
        const user = await User.findOne<Model<UserInterface>>({ where: { email: body.user.id } });
        const page = await Page.findOne<Model<PageInteface>>({ where: { id: params.pageId } });
        if (user && page) {
            switch (params.type) {
                case SectionTypesEnum.HERO:
                    const hero = await insertHeroSection(
                        {
                            ...body,
                        },
                        page.dataValues.id,
                        user.dataValues.id
                    );
                    res.send(hero);
                    break;
                case SectionTypesEnum.OFERTA:
                    const oferta = await insertOfertaSection(
                        {
                            ...body,
                        },
                        page.dataValues.id,
                        user.dataValues.id
                    );
                    res.send(oferta);
                    break;
                case SectionTypesEnum.POSTS:
                    res.send(SectionTypesEnum.POSTS);
                    break;
                case SectionTypesEnum.RECOMENDADO:
                    res.send(SectionTypesEnum.RECOMENDADO);
                    break;
                case SectionTypesEnum.TEXTO:
                    const textSection = await insertTextSection(
                        {
                            ...body,
                        },
                        page.dataValues.id,
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
