import { SessionOptions } from 'express-session';
import { getRedisStore } from '../Redis/RedisStore';

export const getSessionData = async () => {
    try {
        const store = await getRedisStore();
        const sessionData: SessionOptions = {
            store: undefined,
            secret: process.env.CLIENT_SECRET || 'public',
            resave: false,
            saveUninitialized: true,
            name: 'session',
            cookie: {
                secure: false,
                httpOnly: true,
                expires: null,
            },
        };

        if (store) {
            sessionData.store = store;
        }

        return sessionData;
    } catch (error) {}
};
