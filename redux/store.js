import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";
import menuModalReducer from './features/menuModal';
import geopointModalReducer from './features/geopointModal';
// const persistConfig = {
//     key: 'root',
//     version: 1,
// };

const rootReducer = combineReducers({
    menuModal: menuModalReducer,
    geopointModal: geopointModalReducer,
});

// const persistReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistReducer,
//     middleware: (getDefaultMiddleware) => 
//         getDefaultMiddleware({
//             serializableCheck: false,
//             immutableCheck: false,
//         })
// });

// export let persistor = persistStore(store);

const store = configureStore({
    reducer: rootReducer,
});

export default store;