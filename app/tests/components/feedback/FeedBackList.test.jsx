let React = require('react');
let ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedFeedBackList, {FeedBackList} from 'FeedBackList';
import ConnectedFeedBackItem, {FeedBackItem} from 'FeedBackItem';

describe('FeedBackList', () => {
  it('should exist', () => {
    expect(FeedBackList).toExist();
  })

  it('should render one feedback component for each feedback item', () => {
    let feedbacks = [{
      id: 1,
      text: "Thanks a lot",
      hidden: false,
      createdAt: 500
    }, {
      id: 2,
      text: "Good job",
      hidden: false,
      createdAt: 500
    }];
    let store = configure({
      feedbacks
    })
    let provider = TestUtils.renderIntoDocument(
       <Provider store={store}>
         <ConnectedFeedBackList/>
       </Provider>
    );
    let feedbackList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedFeedBackList)[0];
    let feedbacksComponents = TestUtils.scryRenderedComponentsWithType(feedbackList, ConnectedFeedBackItem);

    expect(feedbacksComponents.length).toBe(feedbacks.length);
  });
});
