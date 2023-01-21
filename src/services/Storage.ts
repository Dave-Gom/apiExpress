
import { Model } from "sequelize";
import { StorageInterface } from "../interfaces/Storage.interface";
import { Storage } from "../models/Storage";


const registerUpload = async ({ fileName, idUser, path }: StorageInterface) => {
  const responseItem:Model<StorageInterface> = await Storage.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };