import expect from 'expect';
import df from 'deep-freeze-strict';


let reducers = require('reducers');

describe('Reducers', () => {
  describe('searchtextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'test'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showHiddenReducer', () => {
    it('should toggle showHidden', () => {
      let action = {
        type: 'TOGGLE_SHOW_HIDDEN'
      };
      let res = reducers.showHiddenReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('feedBacksReducer', () => {
    it('should add new feedback', () => {
      let action = {
        type: 'ADD_FEEDBACK',
        text: 'Walk the dog'
      }
      let res = reducers.feedBacksReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })

    it('should toggle a feedback', () => {
      let feedbacks = [{
        id: '123',
        text: "Some text",
        hidden: true,
        createdAt: 987
      }]
      let action = {
        type: 'TOGGLE_FEEDBACK',
        id: '123'
      }
      let res = reducers.feedBacksReducer(df(feedbacks), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].hidden).toEqual(false);
    })
  })

  describe('showList', () => {
    it('should toggle showListReducer', () => {
      let action = {
        type: 'TOGGLE_SHOW_LIST'
      };
      let res = reducers.showListReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
});
