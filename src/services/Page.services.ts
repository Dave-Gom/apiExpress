import { Model } from 'sequelize-typescript';
import { Page } from '../database/models/Pages';
import { Post } from '../database/models/Post';
import { ListSection } from '../database/models/Sectionables/List.section';
import { OfertaSection } from '../database/models/Sectionables/OfertaSection';
import { SectionRecomendado } from '../database/models/Sectionables/RecomendadoSection';
import { TextSection } from '../database/models/Sectionables/TextSection';
import { PageInstance } from '../interfaces/Instances.interface';
import { PageInteface } from '../interfaces/Pages.interface';

export const insertPage = async (page: PageInteface, user: number) => {
    try {
        const responseInsert = await Page.create(user ? { ...page, author: user, updatedBy: user } : { ...page });
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const getPagesService = async (id?: number) => {
    try {
        const responseInsert = id
            ? await Page.findByPk<PageInstance>(id, {
                  include: [
                      'authorDetails',
                      'hero',
                      TextSection,
                      OfertaSection,
                      {
                          model: ListSection,
                          attributes: {
                              include: ['title', 'description', 'limit', 'author'],
                          },
                          include: [
                              {
                                  model: Post,
                              },
                          ],
                      },
                      SectionRecomendado,
                      'updatedByDetails',
                  ],
              })
            : await Page.findAll<PageInstance>({
                  include: [
                      'authorDetails',
                      'hero',
                      TextSection,
                      OfertaSection,
                      {
                          model: ListSection,
                          attributes: {
                              include: ['title', 'description', 'limit', 'author'],
                          },
                          include: [
                              {
                                  model: Post,
                              },
                          ],
                      },
                      SectionRecomendado,
                      'updatedByDetails',
                  ],
              });
        if (responseInsert) {
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al optener las paginas');
        console.log(error);

        return null;
    }
};

export const getPageById = async (id: number) => {
    try {
        const responseGet = await Page.findByPk<PageInstance>(id, {
            include: [
                'authorDetails',
                'hero',
                TextSection,
                OfertaSection,
                {
                    model: ListSection,
                    attributes: {
                        include: ['title', 'description', 'limit', 'author'],
                    },
                    include: [
                        {
                            model: Post,
                        },
                    ],
                },
                SectionRecomendado,
                'updatedByDetails',
            ],
            paranoid: true,
        });

        if (responseGet) {
            return responseGet;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const updatePage = async (id: string, { active, name }: PageInteface, user: number) => {
    try {
        const responseInsert = await Page.update<Model<PageInteface>>(
            { active, name, updatedBy: user },
            { where: { id } }
        );
        if (responseInsert) return responseInsert;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ');
        return null;
    }
};

export const detelePageService = async (id: string, user: number) => {
    try {
        const responseInsert = await Page.update({ updatedBy: user, deletedAt: new Date() }, { where: { id } });
        if (responseInsert) return true;
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};
