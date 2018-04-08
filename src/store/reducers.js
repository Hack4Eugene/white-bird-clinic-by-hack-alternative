import {combineReducers} from 'redux'
import locationReducer from './location'
import authenticationReducer from './authentication/reducer'
import headerReducer from './header/reducer'
import homeReducer from './home/reducer'
import agencyModalReducer from './agencyModal/reducer'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { Map, List, Set } from "immutable"


export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        authentication: authenticationReducer,
        routing: routerReducer,
        header: headerReducer,
        home: homeReducer,
        agencyModal: agencyModalReducer,
        ...asyncReducers
    })
};

export const injectReducer = (store, {key, reducer}) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
