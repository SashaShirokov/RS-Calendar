import React from 'react';

class EventDescription extends React.Component {
    render() {
        let {lector, events, eventName, deadline} = this.props;
        if(events) {
          return (
            <div className="about-event">
                <p><span className="span">deadline:</span> {deadline}</p>
                <p><span className="span">trainer:</span> {lector}</p>
                <p><span className="span">deadline:</span> {deadline}</p>
                <p><span className="span">trainer:</span> {lector} </p>
            </div>
          );
        }
    }
}

export default EventDescription;
