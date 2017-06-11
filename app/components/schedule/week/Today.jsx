import  React from 'react';
import moment from 'moment';

import DayNames from 'DayNames';

class Today extends React.Component {
    constructor(props) {
        super(props);
        // this.onLoad = this.onLoad.bind(this)
    }

    render() {
      let renderDate = () => {
        return moment().startOf('day').format('MMMM Do ddd');
      }
        return (
          <div className="events">
              <h3 className="myDate">{renderDate()}</h3>
              <div>
                <div className="myEvent">
                  <h4><span className="myTime"> 12:00 </span>Webinar</h4>
                </div>
                <div className="myEvent task">
                  <h4><span className="myTime"> 14:00 </span>Task</h4>
                </div>
                <div className="myEvent lec">
                  <h4><span className="myTime"> 16:30 </span>Lecture</h4>
                </div>
                <div className="myEvent">
                  <h4><span className="myTime"> 18:30 </span>Meet up</h4>
                </div>
                <div className="myEvent">
                  <h4><span className="myTime"> 20:30 </span>Home work</h4>
                </div>
              </div>
          </div>
        );
    }
}

export default Today;
