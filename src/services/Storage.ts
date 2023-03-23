import { Model } from 'sequelize-typescript';
import { Storage } from '../database/models/Storage';
import { StorageInterface } from '../interfaces/Storage.interface';

const registerUpload = async ({ fileName, idUser, path }: StorageInterface) => {
    const responseItem: Model<StorageInterface> = await Storage.create({ fileName, idUser, path });
    return responseItem;
};

export { registerUpload };
