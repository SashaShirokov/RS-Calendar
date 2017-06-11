import React from 'react';

class WeatherMessage extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick() {
      console.log("hello")
      this.props.test();
    }

    render() {
        let {temp, location} = this.props;

        return (
          <div className="weather">
              <span className="weather-text">{temp}<sup>o</sup> C {location}</span>
          </div>
        );
    }
}

export default WeatherMessage;
