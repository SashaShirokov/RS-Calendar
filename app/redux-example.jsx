let redux  = require('redux');
import axios from 'axios';

console.log('Starting redux example');

let actions = require('actions');
let store = require('configureStore').configure();

let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('New State', state);

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>'
  }
})
// unsubscribe();

let currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Sophya'));
store.dispatch(actions.changeName('Emily'))
store.dispatch(actions.changeName('Mihail'))

store.dispatch(actions.addMovie('Once upon', 'retro'))
store.dispatch(actions.addMovie('Vikrutasi', 'comedy'))
store.dispatch(actions.removeMovie(2))

store.dispatch(actions.addHobby('creating app'))
store.dispatch(actions.addHobby('studing'))
store.dispatch(actions.removeHobby(1))
