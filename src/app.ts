import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { sequelize } from './database/database';
import { router } from './routes/index';

const main = async () => {
    try {
        const PORT = process.env.PORT || 3000;
        const app = express();
        app.use(express.urlencoded({
            extended: true
        }));
        app.use(express.json());
        app.use(cors());
        app.use(router);
        const bd = await sequelize.sync();
        if (bd)
            console.log("Se la bd se ha conectado y actualizado exitosamente xd");
        else
            console.log("Ha ocurrido un error con la bd", bd);


        app.listen(PORT, () => {
            console.log(`listo por el puerto ${PORT} xdd`);
        });
    } catch (error) {
        console.error('Ha ocurrido un error', error);
    }
}

main();