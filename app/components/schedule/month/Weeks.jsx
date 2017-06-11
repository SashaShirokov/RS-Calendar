import React from 'react';
import Day from 'Day';

class Weeks extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let days = [];
    let {date} = this.props;
    let {month, selected, select, test, handleTest, events, eventName} = this.props;

    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
      days.push(<Day day={day} selected={selected} select={select}  month={month}/>);
      date = date.clone();
      date.add(1, "day");

    }
    return (
      <div className="myRow week" key={days[0]}>
        {days}
      </div>
    );
  }
}

module.exports = Weeks;
