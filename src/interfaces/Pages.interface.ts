export interface PageInteface {
    id: number;
    name: string;
    active: boolean;
    updatedBy: number | null;
    author: number;
    showInNav: boolean;
}
