import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
  );

  let persistor = persistStore(store);

  return { store, persistor }
}
