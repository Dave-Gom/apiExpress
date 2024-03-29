import { Model } from 'sequelize-typescript';
import { Page } from '../database/models/Pages';
import { Post } from '../database/models/Post';
import { HeroSection } from '../database/models/Sectionables/HeroSection';
import { ListSection } from '../database/models/Sectionables/List.section';
import { OfertaSection } from '../database/models/Sectionables/OfertaSection';
import { SectionRecomendado } from '../database/models/Sectionables/RecomendadoSection';
import { TextSection } from '../database/models/Sectionables/TextSection';
import { User } from '../database/models/user';
import {
    HeroInstance,
    ListaInstance,
    OfertaInstance,
    PageInstance,
    PostInstance,
    SectionRecomendadoInstance,
    TextSectionInstance,
} from '../interfaces/Instances.interface';
import { SectionRecomendadoInterface } from '../interfaces/Post.interface';
import {
    HeroSection as HeroSectionInterface,
    ListInterface,
    OfertaSectionInterface,
    TextSectionInterface,
} from '../interfaces/Section.interface';

export const insertHeroSection = async (section: HeroSectionInterface, page: PageInstance | null, user: number) => {
    try {
        const responseInsert = await HeroSection.create<HeroInstance>(
            {
                ...section,
                author: user,
                updatedBy: user,
            },
            {
                include: 'pages',
            }
        );
        if (responseInsert && responseInsert.addPages) {
            if (page && page.addHero) {
                //Puercaso, ver para cambiar en el futuro
                await responseInsert.addPages(page);
                await page.addHero(responseInsert);
            }
            return responseInsert;
        }

        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const insertOfertaSection = async (section: OfertaSectionInterface, page: PageInstance | null, user: number) => {
    try {
        const responseInsert = await OfertaSection.create<OfertaInstance>(
            {
                ...section,
                author: user,
                updatedBy: user,
            },
            { include: 'pages' }
        );

        if (responseInsert && responseInsert.addPages) {
            if (page && page.addOfertaSection) {
                await responseInsert.addPages(page);
                await page.addOfertaSection(responseInsert);
            }
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la pagina ', error);
        return null;
    }
};

export const insertTextSection = async (section: TextSectionInterface, page: PageInstance | null, user: number) => {
    try {
        const responseInsert = await TextSection.create<TextSectionInstance>(
            {
                ...section,
                author: user,
                updatedBy: user,
            },
            { include: Page }
        );
        if (responseInsert && responseInsert.addPages && page && page.addTextSection) {
            await page.addTextSection(responseInsert);
            await responseInsert.addPages(page);
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la seccion ', error);
        return null;
    }
};

export const insertListSection = async (secction: ListInterface, page: PageInstance | null, user: number) => {
    try {
        const responseInsert = await ListSection.create<ListaInstance>(
            {
                ...secction,
                author: user,
                updatedBy: user,
            },
            { include: [Page] }
        );
        if (responseInsert && responseInsert.addPage) {
            if (page && page.addListSection) {
                await page.addListSection(responseInsert);
                await responseInsert.addPage(page);
            }
            return responseInsert;
        }
        return null;
    } catch (error) {
        console.error('Error al insertar la seccion ', error);
        return null;
    }
};

export const insertRecomendadoSection = async (
    secction: SectionRecomendadoInterface,
    page: PageInstance | null,
    user: number,
    postId: number
) => {
    try {
        const responseInsert = await SectionRecomendado.create<SectionRecomendadoInstance>(
            {
                ...secction,
                author: user,
                updatedBy: user,
            },
            { include: [Page, Post] }
        );

        if (responseInsert) {
            if (responseInsert.addPage && page && page.addSectionRecomendado) {
                await page.addSectionRecomendado(responseInsert);
                await responseInsert.addPage(page);
            }
            if (responseInsert.addPost) {
                const post = await Post.findByPk<PostInstance>(postId, {
                    include: [SectionRecomendado],
                });
                if (post && post.addSectionRecomendado) {
                    await post.addSectionRecomendado(responseInsert);
                    await responseInsert.addPost(post);
                    await responseInsert.reload();
                }
            }
            return responseInsert;
        }

        return null;
    } catch (error) {
        console.error('Error al insertar la seccion ', error);
        return null;
    }
};

export const getHeros = async () => {
    try {
        const herosWithPage = await HeroSection.findAll<Model<HeroInstance>>({ include: ['pages', User] });
        if (herosWithPage) {
            return herosWithPage;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getOfertas = async () => {
    try {
        const ofertasWithPage = await OfertaSection.findAll<Model<OfertaInstance>>({ include: [Page, User] });
        if (ofertasWithPage) {
            return ofertasWithPage;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getPostList = async () => {
    try {
        const ofertasWithPage = await ListSection.findAll<ListaInstance>({ include: [Post] });
        if (ofertasWithPage) {
            return ofertasWithPage;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getRecomendados = async () => {
    try {
        const recomendadosWithPage = await SectionRecomendado.findAll<SectionRecomendadoInstance>({
            include: [Page, Post],
        });
        if (recomendadosWithPage) {
            return recomendadosWithPage;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const getTextoSections = async () => {
    try {
        const textSection = await TextSection.findAll<TextSectionInstance>({ include: [Page] });
        if (textSection) {
            return textSection;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const putListSection = async (secction: ListInterface, listaId: number, user: number) => {
    try {
        const updateResponse = await ListSection.update<ListaInstance>(
            { ...secction, updatedBy: user },
            { where: { id: listaId } }
        );
        if (updateResponse) {
            const list = await ListSection.findByPk<ListaInstance>(listaId, { include: Post });
            if (list) {
                return list;
            } else {
                return updateResponse;
            }
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const putHero = async (newData: HeroSectionInterface, heroId: number, user: number) => {
    try {
        const updateResponse = await HeroSection.update<HeroInstance>(
            { ...newData, updatedBy: user },
            { where: { id: heroId } }
        );
        if (updateResponse) {
            return updateResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const putOfertaSection = async (newData: OfertaSectionInterface, ofertaId: number, user: number) => {
    try {
        const updateResponse = await OfertaSection.update<OfertaInstance>(
            { ...newData, updatedBy: user },
            { where: { id: ofertaId } }
        );
        if (updateResponse) {
            return updateResponse;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const putTextoSection = async (newData: TextSectionInterface, textoId: number, user: number) => {
    try {
        const updateResponse = await TextSection.update<TextSectionInstance>(
            { ...newData, updatedBy: user },
            { where: { id: textoId } }
        );
        if (updateResponse) {
            const seccion = await TextSection.findByPk<TextSectionInstance>(textoId);
            return seccion;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const putRecomendadoSection = async (
    newData: SectionRecomendadoInterface,
    recomendadoId: number,
    user: number,
    post?: number
) => {
    try {
        const updateResponse = await SectionRecomendado.update<SectionRecomendadoInstance>(
            { ...newData, updatedBy: user },
            { where: { id: recomendadoId } }
        );
        if (updateResponse) {
            const recom = await SectionRecomendado.findByPk<SectionRecomendadoInstance>(recomendadoId, {
                include: Post,
            });
            if (recom) {
                const toAdd = await Post.findByPk<PostInstance>(post);
                if (post && toAdd) {
                    if (toAdd.setSectionRecomendados && recom && recom.setPosts) {
                        await recom.setPosts(toAdd);
                        await toAdd.setSectionRecomendados([]);
                        await toAdd.setSectionRecomendados(recom);
                        await recom.reload();
                        return recom;
                    }
                }
                return recom;
            }
            return null;
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const addPosts = async (posts: number[], listId: number, user: number) => {
    try {
        const lista = await ListSection.findByPk<ListaInstance>(listId, { include: [Post] });

        if (lista && lista.addPost && lista.setPosts) {
            const postsToAdd = await Post.findAll<PostInstance>({
                where: { id: posts },
            });
            if (postsToAdd) {
                await lista.setPosts([]);
                await lista.setPosts(postsToAdd);
                await lista.reload();
            }
            return lista;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

export const removeHero = async (id: number, user: number) => {
    try {
        const hero = await HeroSection.findByPk<HeroInstance>(id);
        if (hero) {
            await hero.update({ updatedBy: user });
            await hero.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.log('error: ', error);

        return false;
    }
};

export const removeOferta = async (id: number, user: number) => {
    try {
        const oferta = await OfertaSection.findByPk<OfertaInstance>(id);
        if (oferta) {
            await oferta.update({ updatedBy: user });
            await oferta.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
};

export const removeListPost = async (id: number, user: number) => {
    try {
        const oferta = await ListSection.findByPk<ListaInstance>(id);
        if (oferta) {
            await oferta.update({ updatedBy: user });
            await oferta.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
};

export const removeRecomendadoSection = async (id: number, user: number) => {
    try {
        const oferta = await SectionRecomendado.findByPk<SectionRecomendadoInstance>(id);
        if (oferta) {
            await oferta.update({ updatedBy: user });
            await oferta.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
};

export const removeTextSection = async (id: number, user: number) => {
    try {
        const text = await TextSection.findByPk<TextSectionInstance>(id);
        if (text) {
            await text.update({ updatedBy: user });
            await text.destroy();
            return true;
        }
        return false;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
};
