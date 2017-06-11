import  React from 'react';
import {connect} from 'react-redux';
import FeedBackItem from 'FeedBackItem';

let FeedBackAPI = require('FeedBackAPI');

export class FeedBackList extends React.Component {
    render() {
        let {feedbacks, showHidden, searchText} = this.props;
        let renderFeedbacks = () => {
          if (feedbacks.length === 0) {
            return (
              <p className="container__message">no feedbacks yet</p>
            );
          }
          return FeedBackAPI.filterFeedBacks(feedbacks, showHidden, searchText).map((feedback) => {
            return (
              <FeedBackItem key={feedback.id} {...feedback}/>
            )
          })
        }
        return (
          <div>
            {renderFeedbacks()}
          </div>
        );
    }
}


export default connect(
  (state) => {
    return state;
  }
)(FeedBackList);
