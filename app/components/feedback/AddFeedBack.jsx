import React from 'react';
let {connect} = require('react-redux');
let actions = require('actions');

export class AddFeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let {dispatch} = this.props;

        let feedback = this.refs.feedback.value;
        if (feedback.length > 0) {
          this.refs.feedback.value = '';
          // this.props.onAddFeedBack(feedback);
          dispatch(actions.addFeedBack(feedback));
        } else {
          this.refs.feedback.focus();
        }
    }

    render() {
        return (
          <div className="container__footer">
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="feedback" placeholder="Leave your feedback" />
                <button className="button expanded">Add FeedBack</button>
            </form>
          </div>
        );
    }
}


export default connect()(AddFeedBack);
