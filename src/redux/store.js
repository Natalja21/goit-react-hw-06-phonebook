import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './slice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

const ContactsReducer = persistReducer(persistConfig, phoneBookSlice.reducer);

export const store = configureStore({
    reducer: {
        phoneBook: ContactsReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persisStore = persistStore(store);
