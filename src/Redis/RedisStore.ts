import RedisStore from 'connect-redis';
import { createClient } from 'redis';

export const getRedisStore = async () => {
    const redisClient = createClient({
        url: 'redis://redis:6379',
    });

    redisClient
        .connect()
        .then(() => console.log('Cliente de REDIS CONECTADO!'))
        .catch(e => console.log('ERROR EN REDIS CLI: \n', e));

    if (redisClient.isOpen) {
        let redisStore = new RedisStore({
            client: redisClient,
        });

        return redisStore;
    } else {
        return null;
    }
};
