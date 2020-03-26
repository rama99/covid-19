import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';
import coronaReducer from './corona/corona.reducer';
import countryReducer from './country/country.reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist:[]
   //whitelist:[`authState` , `bootcampState`]
}

const rootReducer = combineReducers({
    homeState: homeReducer ,
    coronaState: coronaReducer ,
    countryState: countryReducer
})

export default persistReducer(persistConfig , rootReducer);