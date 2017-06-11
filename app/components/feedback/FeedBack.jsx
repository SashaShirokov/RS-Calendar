import  React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import FeedBackList from 'FeedBackList';
import AddFeedBack from 'AddFeedBack';
import FeedBackSearch from 'FeedBackSearch';
// import FeedBackAPI from 'FeedBackAPI';


class FeedBack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <h1 className="text-center page-title">Leave your feedback.</h1>
              <div className="row">
                  <div className="column small-centered small-11 medium-8 large-6">
                      <div className="container ">
                          <FeedBackSearch/>
                          <FeedBackList/>
                          <AddFeedBack/>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}


export default FeedBack;
