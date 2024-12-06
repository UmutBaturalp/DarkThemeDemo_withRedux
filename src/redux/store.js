import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import themeReducer from './reducers/themeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  theme: persistReducer(persistConfig, themeReducer),
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
