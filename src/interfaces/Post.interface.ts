export interface PostInterface {
    id: number;
    title?: string;
    content: string;
    author: number;
    image: string;
    updatedBy: number;
    deletedAt: Date | null;
}
