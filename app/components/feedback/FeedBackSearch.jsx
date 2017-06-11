import React from 'react';
import {connect} from 'react-redux';
let actions = require('actions');

export class FeedBackSearch extends React.Component {
    constructor(props) {
        super(props);
        // this.handleSearch = this.handleSearch.bind(this)
    }

    render() {
      let {dispatch, showHidden, searchText} = this.props;
        return (
          <div className="container__header">
            <input type="text" ref="searchText" placeholder="Search feedbacks" value={searchText} onChange={() => {
                let searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText))
              }}/>
            <label>
              <input type="checkbox" ref="showHidden" checked={showHidden} onChange={() => {
                  dispatch(actions.toggleShowHidden());
                }}/>
              Show hidden feedbacks...
            </label>
          </div>
        );
    }
}


export default connect(
  (state) => {
    return {
      showHidden: state.showHidden,
      searchText: state.searchText
    }
  }
)(FeedBackSearch);
