import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;


// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { combineReducers } from 'redux';
// import weatherReducer from './Reducer';
// const rootReducer = combineReducers({
//     weather: weatherReducer,
//   });
// const store = createStore(weatherReducer, applyMiddleware(thunk));
// export type RootState = ReturnType<typeof rootReducer>;
// export default store;