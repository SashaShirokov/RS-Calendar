import React from 'react';

class DayNames extends React.Component {
    render() {
        return (
          <div className="myRow day-names">
            <span className="day">Sun</span>
            <span className="day">Mon</span>
            <span className="day tuesday">Tue</span>
            <span className="day">Wed</span>
            <span className="day">Thu</span>
            <span className="day">Fri</span>
            <span className="day">Sat</span>
          </div>
        );
    }
}

module.exports = DayNames;
