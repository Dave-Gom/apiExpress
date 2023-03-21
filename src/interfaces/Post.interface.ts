export interface PostInterface {
    id: number;
    title: string;
    brief: string;
    content: string;
    author: number;
    image: string;
    updatedBy: number;
    deletedAt: Date | null;
}
