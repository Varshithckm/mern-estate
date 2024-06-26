import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({user:userReducer});

const persistConfig = {
  key:'root',
  storage,
  version:1
}

const persistedReducer = persistedReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
   serializableCheck:false,
  })
})

export const persistor = persistStore(store);

//persist is used to save the stored state even after the page is refreshed
