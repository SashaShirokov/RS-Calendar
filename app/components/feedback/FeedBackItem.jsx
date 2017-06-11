import  React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
let actions = require('actions');

export class FeedBackItem extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this)
    }

    onToggle(id) {
      this.props.dispatch(actions.toggleFeedBack(this.props.id));
      // this.props.onToggle(this.props.id)
    }
    render() {
      let {id, text, hidden, createdAt, dispatch} = this.props;
      console.log(dispatch)
      let feedbackClassName = hidden ? 'feedbackItem feedbackItem-hidden' : 'feedbackItem';
      let renderDate = () => {
        let message = 'Created at ';
        let timestamp = createdAt;
        return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
      }
        return (
          <div className={feedbackClassName} onClick={this.onToggle}>
            <div>
              <input type="checkbox" checked={hidden}/>
            </div>
            <div>
              <p>{text}</p>
              <p className="feedbackItem__subtext">{renderDate()}</p>
            </div>
          </div>
        );
    }
}

export default connect()(FeedBackItem);
