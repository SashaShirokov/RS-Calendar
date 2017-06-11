let redux = require('redux');
let thunk = require('redux-thunk').default;
import {searchTextReducer, showHiddenReducer, feedBacksReducer, showListReducer, mapReducer} from 'reducers';

export let configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showHidden: showHiddenReducer,
    feedbacks: feedBacksReducer,
    showList: showListReducer,
    map: mapReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
