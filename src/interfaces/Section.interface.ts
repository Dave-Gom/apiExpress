export interface TextSectionInterface {
    id: number;
    content: string;
    author: number;
    updatedBy: number;
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
    author: number;
    updatedBy: number;
}

export interface OfertaSections {
    id?: number;
    pageId: number;
    ofertaSectionId: number;
}

export interface OfertaSectionInterface {
    id: number;
    title: string;
    content?: string;
    principalImage: string;
    prevContent: string;
    leftImage: string;
    rigthImage: string;
    position: number;
    buttonText: string;
    author: number;
    navegate: string;
    updatedBy: number;
}

export interface ListInterface {
    id: number;
    title: string;
    description?: string;
    limit?: number;
    author: number;
    position: number;
    updatedBy: number;
    buttonText?: string;
}

export enum SectionTypesEnum {
    HERO = 'HERO',
    RECOMENDADO = 'RECOMENDADO',
    OFERTA = 'OFERTA',
    TEXTO = 'TEXTO',
    POSTS = 'POSTS',
}
