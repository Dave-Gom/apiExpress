import { Request, Response } from "express";
import { RequestExt } from "../interfaces/RequestExtend.interface";
import { StorageInterface } from "../interfaces/Storage.interface";

import { registerUpload } from "../services/Storage";
import { handleHttp } from "../utils/error.handler";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: StorageInterface = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };