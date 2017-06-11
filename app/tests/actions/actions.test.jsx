import expect from 'expect';

let actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show hidden action', () => {
    let action = {
      type: 'TOGGLE_SHOW_HIDDEN'
    };
    let res = actions.toggleShowHidden();

    expect(res).toEqual(action);
  })

  it('should generate add feedback action', () => {
    let action = {
      type: 'ADD_FEEDBACK',
      text: 'Thanks a lot'
    };
    let res = actions.addFeedBack(action.text);

    expect(res).toEqual(action);
  })

  it('should generate toggle feedback action', () => {
    let action = {
      type: 'TOGGLE_FEEDBACK',
      id: 1
    };
    let res = actions.toggleFeedBack(action.id);

    expect(res).toEqual(action);
  })

  it('should generate toggle list action', () => {
    let action = {
      type: 'TOGGLE_SHOW_LIST'
    };
    let res = actions.toggleShowList();

    expect(res).toEqual(action);
  })
})
