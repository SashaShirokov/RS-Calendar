import React from 'react';
import moment from 'moment';
import EventDescription from 'EventDescription';
let actions = require('actions');
let store = require('configureStore').configure();

class DayBanner extends React.Component {
  constructor(props) {
      super(props);
      this.handleDescription = this.handleDescription.bind(this);
  }

  handleDescription(e) {
      let myEvent = e.target.innerHTML;
      this.props.onGetDescription(myEvent);
  }

  render() {
    let {events, eventName, deadline, lector, selected} = this.props;

    let renderDate = () => {
      return selected.format('MMMM Do ddd');
    }

    let renderEvent =() => {
      if (events) {
        return (
          <div>
            <span onClick={this.handleDescription} className="container__today__events"> <i className="circle fa fa-circle" aria-hidden="true"></i>{events} {eventName}</span>
          </div>
        )
      }
    }

    let renderMessage =() => {
      if (eventName && deadline) {
        return <EventDescription events={events} eventName={eventName} lector={lector} deadline={deadline}/>;
      }
    }

    return (
        <div>
            <h3 className="container__today__title">{renderDate()}</h3>
            <div className="container__today__description">
                <h4 className="container__today__heading">Schedule</h4>
                {renderEvent()}
                {renderMessage()}
            </div>
        </div>
    );
  }
}

DayBanner.defaultProps = {
    events: "no events for today"
}

DayBanner.propTypes = {
    events: React.PropTypes.string
}

module.exports = DayBanner;
