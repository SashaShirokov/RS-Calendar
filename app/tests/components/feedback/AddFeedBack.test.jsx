let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

import {AddFeedBack} from 'AddFeedBack';

describe('AddFeedBack', () => {
  it('should exist', () => {
    expect(AddFeedBack).toExist();
  })

  it('should dispatch ADD_FEEDBACK when valid feedback text', () => {
    let addValue = 'Check mail';
    let action = {
      type: 'ADD_FEEDBACK',
      text: addValue
    }
    let spy = expect.createSpy();
    let addFeedBack = TestUtils.renderIntoDocument(<AddFeedBack dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addFeedBack));

    addFeedBack.refs.feedback.value = addValue;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should not dispatch ADD_FEEDBACK when invalid feedback text', () => {
    let addValue = '';
    let spy = expect.createSpy();
    let addFeedBack = TestUtils.renderIntoDocument(<AddFeedBack dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addFeedBack));

    addFeedBack.refs.feedback.value = addValue;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  })
})
