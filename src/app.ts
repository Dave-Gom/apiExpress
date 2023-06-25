import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import './database/Associations';
import { sequelize } from './database/database';
import { router } from './routes/index';

const main = async () => {
    try {
        const PORT = process.env.PORT || 3000;
        const app = express();
        app.use(
            express.urlencoded({
                extended: true,
            })
        );
        app.use(express.static('storage'));
        app.use(express.json());

        app.use(
            cors({
                origin: 'http://localhost:3000',
                credentials: true,
            })
        );

        app.use(
            session({
                secret: process.env.CLIENT_SECRET || 'public',
                resave: false,
                saveUninitialized: true,
                name: 'session',
                cookie: {
                    secure: false,
                    httpOnly: true,
                },
            })
        );
        app.use(router);
        const bd = await sequelize.sync();
        if (bd) console.log('Se la bd se ha conectado y actualizado exitosamente xd');
        else console.log('Ha ocurrido un error con la bd', bd);

        app.listen(PORT, () => {
            console.log(`listo por el puerto ${PORT} xdd`);
        });
    } catch (error) {
        console.error('Ha ocurrido un error', error);
    }
};

main();
