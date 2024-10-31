import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import personagensReducer from "../store/slices/PersonagensSlice";
import themeReducer from "../store/slices/ThemeSlices";

// Configuração do Redux Persist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["theme", "personagens"],
};

// Reducers combinados
const rootReducer = combineReducers({
    theme: themeReducer,
    personagens: personagensReducer,
});

// Aplicando a persistência ao reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuração da store com middleware necessário
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Configuração do persistor para persistir o estado
export const persistor = persistStore(store);

// Tipagem para o estado e dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
