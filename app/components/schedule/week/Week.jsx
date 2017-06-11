import  React from 'react';

import openWeatherMap from 'openWeatherMap';
import DayNames from 'DayNames';
import Today from 'Today';
import DayBanner from 'DayBanner';

class Week extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  }

    render() {
        return (
            <div className="row week">
              <div className="column small-centered small-11 medium-8 large-8">
                <div className="container">
                  <section className="calendar">
                      <header className="header">
                          <DayNames />
                      </header>
                      <Today />
                  </section>
                </div>
              </div>
            </div>
        );
    }
}

export default Week;
