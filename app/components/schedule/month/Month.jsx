import  React from 'react';
import moment from 'moment';

import Weeks from 'Weeks';
import DayNames from 'DayNames';
import Day from 'Day';
import DayBanner from 'DayBanner';
import EventDescription from 'EventDescription';
import eventsAPI from 'eventsAPI';

class Month extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          month: moment(),
          selected: moment().startOf('day'),
          events: "no events for today",
          eventName: "",
          deadline: false,
          lector: false
      };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.handleGetDescription = this.handleGetDescription.bind(this);
  }

  previous() {
      let {month} = this.state;
      this.setState({
          month: month.subtract(1, 'month'),
      });
  }

  next() {
      let {month} = this.state;
      this.setState({
          month: month.add(1,'month'),
      });
  }

  select(day) {
      this.setState({
          selected: day.date,
          month: day.date.clone(),
          events: day.events,
          eventName: day.eventName
      });
      console.log(day.events)
  }

  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    let {selected, month, events, eventName} = this.state;

    while (!done) {
      weeks.push(
        <Weeks className="weeks" handleTest={this.handleTest} key={date} date={date.clone()} month={month} select={(day)=>this.select(day)} selected={selected} events={events} eventName={eventName}/>
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  handleGetDescription(someEvent) {
      let that = this;
      eventsAPI.passDescription('5915cd1589e1e8ac13de8550').then(function(data) {
          that.setState({
              deadline: data.start,
              lector: data.loc
          })
      }, function(errorMessage) {
          alert(errorMessage)
      })
  }

  renderMonthLabel() {
    let {month} = this.state;
    return (
      <span className="month-label">{month.format("MMMM YYYY")}</span>
    )
  }

  render() {
    let {events, eventName, deadline, lector, selected} = this.state;

    let renderDaybanner = () => {
      return <DayBanner events={events} selected={selected} eventName={eventName} deadline={deadline} lector={lector} onGetDescription={this.handleGetDescription} />
    }

    return (
        <div className="row rowFlex">
            <div className="column small-centered small-11 medium-4 large-4 left">
                <div className="container">
                    <div className="container__today">
                        {renderDaybanner()}
                    </div>
                </div>
            </div>
            <div className="column small-centered small-11 medium-8 large-8 right">
                <div className="container--calendar">
                    <section className="calendar">
                        <header className="header">
                            <div className="month-display myRow">
                                <i className="arrow fa fa-angle-left" onClick={this.previous}/>
                                {this.renderMonthLabel()}
                                <i className="arrow fa fa-angle-right" onClick={this.next}/>
                            </div>
                            <DayNames />
                        </header>
                        {this.renderWeeks()}
                    </section>
                </div>
            </div>
        </div>
    );
  }
}

export default Month;
