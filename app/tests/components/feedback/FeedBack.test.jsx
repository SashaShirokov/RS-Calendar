let React = require('react');
let ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let configureStore = require('configureStore');
import FeedBackList from 'FeedBackList';
import FeedBack from 'FeedBack';

describe('FeedBack', () => {
  it('should exist', () => {
    expect(FeedBack).toExist();
  });

  // it('should render FeedBackList', () => {
  //   let store = configureStore.configure();
  //   let provider = TestUtils.renderIntoDocument(
  //     <Provider store={store}>
  //       <FeedBack/>
  //     </Provider>
  //   );
  //
  //   let feedBack = TestUtils.scryRenderedComponentsWithType(provider, FeedBack)[0];
  //   let feedBackList = TestUtils.scryRenderedComponentsWithType(feedBack, FeedBackList);
  //
  //   expect(feedBackList.length).toEqual(1);
  // })
});
