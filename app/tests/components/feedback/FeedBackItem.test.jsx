let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let store = require('configureStore').configure();
import FeedBackItem from 'FeedBackItem';

describe('FeedBackItem', () => {
  it('should exist', () => {
    expect(FeedBackItem).toExist();
  })

  // it('should dispatch TOGGLE_FEEDBACK action', () => {
  //   let feedbackData = {
  //     id: 100,
  //     text: 'Hello',
  //     hidden: true
  //   };
  //   let spy = expect.createSpy();
  //   let feedbackitem = TestUtils.renderIntoDocument(<FeedBackItem {...feedbackData} dispatch={spy}/>);
  //   let $el = $(ReactDOM.findDOMNode(feedbackitem));
  //
  //   TestUtils.Simulate.click($el[0]);
  //
  //   expect(spy).toHaveBeenCalledWith({
  //     type: 'TOGGLE_FEEDBACK',
  //     id: feedbackData.id
  //   });
  // })
})
