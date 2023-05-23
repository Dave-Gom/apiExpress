import { Model } from 'sequelize-typescript';
import { CategoriaInterface } from './Categoria.interface';
import { PageInteface } from './Pages.interface';
import { PostInterface, SectionRecomendadoInterface } from './Post.interface';
import { HeroSection, ListInterface, OfertaSectionInterface, TextSectionInterface } from './Section.interface';

export interface PageInstance extends Model<PageInteface> {
    addHero?: (obj: HeroInstance) => Promise<PageInstance>;
    addOfertaSection?: (obj: OfertaInstance) => Promise<PageInstance>;
    addTextSection?: (obj: TextSectionInstance) => Promise<PageInstance>;
    addListSection?: (obj: ListaInstance) => Promise<PageInstance>;
    addSectionRecomendado?: (obj: SectionRecomendadoInstance) => Promise<PageInstance>;
}

export interface HeroInstance extends Model<HeroSection> {
    addPages?: (obj: PageInstance) => Promise<HeroInstance>;
}
export interface OfertaInstance extends Model<OfertaSectionInterface> {
    addPages?: (obj: PageInstance) => Promise<OfertaInstance>;
}

export interface TextSectionInstance extends Model<TextSectionInterface> {
    addPages?: (obj: PageInstance) => Promise<TextSectionInstance>;
}

export interface SectionRecomendadoInstance extends Model<SectionRecomendadoInterface> {
    addPage?: (obj: PageInstance) => Promise<SectionRecomendadoInstance>;
    addPost?: (obj: PostInstance) => Promise<SectionRecomendadoInstance>;
}

// categorias y posts

export interface CategoriaInstance extends Model<CategoriaInterface> {
    addPost?: (obj: PostInstance) => Promise<CategoriaInstance>;
}

export interface PostInstance extends Model<PostInterface> {
    addCategoria?: (obj: CategoriaInstance) => Promise<PostInstance>;
    addListSection?: (obj: ListaInstance) => Promise<PostInstance>;
    addSectionRecomendado?: (obj: SectionRecomendadoInstance) => Promise<PostInstance>;
}

export interface ListaInstance extends Model<ListInterface> {
    addPost?: (obj: PostInstance | PostInstance[]) => Promise<ListaInstance>;
    addPage?: (obj: PageInstance) => Promise<ListaInstance>;
    setPosts?: (obj: PostInstance | PostInstance[]) => Promise<ListaInstance>;
}
