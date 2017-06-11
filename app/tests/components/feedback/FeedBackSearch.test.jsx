let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

import {FeedBackSearch} from 'FeedBackSearch';

describe('FeedBackSearch', () => {
  it('should exist', () => {
    expect(FeedBackSearch).toExist();
  })

  it('should dispatch setSearchText on input change', () => {
    let searchText = 'Phone';
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    let spy = expect.createSpy();
    let feedbackSearch = TestUtils.renderIntoDocument(<FeedBackSearch dispatch={spy}/>);

    feedbackSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(feedbackSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should dispatch toggleShowHidden when checkbox checked', () => {
    let spy = expect.createSpy();
    let action = {
       type: 'TOGGLE_SHOW_HIDDEN'
    }
    let feedbackSearch = TestUtils.renderIntoDocument(<FeedBackSearch dispatch={spy}/>);

    feedbackSearch.refs.showHidden.checked = true;
    TestUtils.Simulate.change(feedbackSearch.refs.showHidden);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
