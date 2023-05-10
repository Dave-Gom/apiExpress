export interface PostInterface {
    id: number;
    title: string;
    brief: string;
    longDesc: string;
    content: string;
    author: number;
    image: string;
    updatedBy: number;
    deletedAt: Date | null;
    active: boolean;
}

export interface SectionRecomendadoInterface {
    id: number;
    position: number;
    updatedBy: number;
    author: number;
}
