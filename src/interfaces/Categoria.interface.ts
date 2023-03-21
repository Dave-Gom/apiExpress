export interface CategoriaInterface {
    id: number;
    nombre: string;
    author: number;
    updatedBy: number;
    active: string;
    deletedAt: Date | null;
}

export interface PostCategoriasInterface {
    id?: number;
    idCategoria: number;
    idPost: number;
}
