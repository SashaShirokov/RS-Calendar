import uuid from 'node-uuid';
import moment from 'moment';

export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export let showHiddenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_HIDDEN':
      return !state;
    default:
      return state;
  };
};

export let feedBacksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          hidden: false,
          createdAt: moment().unix()
        }
      ];
      case 'TOGGLE_FEEDBACK':
        return state.map((feedback) => {
          if (feedback.id === action.id) {
            let nextHidden = !feedback.hidden;

            return {
              ...feedback,
              hidden: nextHidden
            }
          } else {
            return feedback;
          }
        });
        case 'ADD_FEEDBACKS':
          return [
            ...state,
            ...action.feedbacks
          ]
    default:
        return state;
  }
}

// Curriculum reducer
export let showListReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_LIST':
      return !state;
    default:
      return state;
  };
};

///////////////////////////////////////////
export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
    switch (action.type) {
      case 'START_LOCATION_FETCH':
       return {
         isFetching: true,
         url: undefined
       }
      case 'COMPLETE_LOCATION_FETCH':
       return {
         isFetching: false,
         url: action.url
       }
      default:
        return state;
    }
}
