import React from 'react';

class Day extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    let {day,
        day: {
        date,
        isCurrentMonth,
        isToday,
        number, eventName, events}, select, selected, month} = this.props;
        if (date.format("DD MM YY") === '06 06 17') {
          day.events = "lec";
          day.eventName = "Interview";
        } else if (date.format("DD MM YY") === '11 06 17') {
          day.events = "task";
          day.eventName = "Calendar"
        } else if (date.format("DD MM YY") === "19 06 17") {
          day.events = "web";
          day.eventName = "Photoshop"
        }


    return (
        <span
          key={date.toString()}
          className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
          onClick={()=>select(day)}>
          {number} {day.events} 
        </span>
    );
  }
}

module.exports = Day;
