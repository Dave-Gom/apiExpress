export interface CarInterface {
    id: number,
    color: string,
    gas: GASENUM,
    year: number,
    description: string,
    price: number
};

export enum GASENUM {
    GASOLINE = 'GASOLINE',
    ELECTRIC = 'ELECTRIC',
};