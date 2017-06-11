import axios from 'axios';

// Feedback actions
export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

export let toggleShowHidden = () => {
  return {
    type: 'TOGGLE_SHOW_HIDDEN'
  }
}

export let addFeedBack = (text) => {
  return {
    type: 'ADD_FEEDBACK',
    text
  }
}

export let addFeedBacks = (feedbacks) => {
  return {
    type: 'ADD_FEEDBACKS',
    feedbacks
  }
}

export let toggleFeedBack = (id) => {
  return {
    type: 'TOGGLE_FEEDBACK',
    id
  }
}

// Curriculum actions
export let toggleShowList = () => {
  return {
    type: 'TOGGLE_SHOW_LIST'
  }
}

/////////////////////////////////////////////////

export let startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}

export let completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

export let fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function(res) {
      let loc = res.data.loc;
      let baseUrl = 'http://maps.google.com?q='

      dispatch(completeLocationFetch(baseUrl + loc));
    })
  }
}
