import  React from 'react';

import  ScheduleNav from 'ScheduleNav';

class Schedule extends React.Component {
    render() {
        return (
          <div>
            <ScheduleNav/>
            {this.props.children}
          </div>
        );
    }
}

export default Schedule;
