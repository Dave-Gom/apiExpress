export interface CategoriaInterface {
    id: number;
    nombre: string;
    author: number;
    updatedBy: number;
    active: string;
    deletedAt?: string;
}

export interface PostCategorias {
    id?: number;
    idCategoria: number;
    idPost: number;
    active: boolean;
}
