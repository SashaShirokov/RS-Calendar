import  React from 'react';
import {Link, IndexLink} from 'react-router';

class ScheduleNav extends React.Component {
    render() {
        return (
          <div className="scheduleNav">
            <IndexLink className="scheduleNav__month" to="schedule/month" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Month</IndexLink>
            <IndexLink to="schedule/week" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Week</IndexLink>
          </div>
        );
    }
}


export default ScheduleNav;
