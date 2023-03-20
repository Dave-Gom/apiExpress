// export interface Sections {
//     id: number;
//     pageId: number;
//     sectionType: string;
//     position: number;
// }

export interface TextSections {
    id: number;
    pageId: number;
    textSectionId: number;
}

export interface TextSection {
    id: number;
    content: string;
    pageId: number;
    author: number;
    updatedBy: number;
    active: boolean;
    position: number;
}

export interface HeroSections {
    id?: number;
    pageId: number;
    heroSectionId: number;
}

export interface HeroSection {
    id: number;
    title?: string;
    content?: string;
    image: string;
    opacity?: number;
    position: number;
    pageId: number;
    author: number;
    updatedBy: number;
}

export interface OfertaSections {
    id: number;
    pageId: number;
    ofertaSectionId: number;
}

export interface OfertaSection {
    id: number;
    title: string;
    content?: string;
    principalImage: string;
    leftImage: string;
    rigthImage: string;
    position: number;
    pageId: number;
    author: number;
    navegate: string;
    updatedBy: number;
}

export enum SectionTypesEnum {
    HERO = 'HERO',
    RECOMENDADO = 'RECOMENDADO',
    OFERTA = 'OFERTA',
    TEXTO = 'TEXTO',
    POSTS = 'POSTS',
}
