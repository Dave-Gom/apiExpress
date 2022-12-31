import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { sequelize } from './database/database';
import { router } from './routes/item';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(router);
sequelize.authenticate().then(() => {
    console.log(
        'conexion establecida exitosamente'
    );

})
    .catch(err => {
        console.log(err);
        console.log("error en sequelize");

    })
app.listen(PORT, () => {
    console.log(`listo por el puerto ${PORT}`);

})