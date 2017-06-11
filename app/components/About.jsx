import  React from 'react';

class About extends React.Component {
    render() {
        return (
          <div className="about">
              <h1 className="text-center page-title">RS-Organizer</h1>
              <div className="row">
                  <div className="column small-centered small-11 medium-8 large-6">
                      <div className="container">
                          <div className="container__header">
                            <h4>This application is build on React</h4>
                          </div>
                          <ul>
                    				<li className="react"><p>React</p></li>
                            <li className="foundation"><p>Foundation</p></li>
                            <li className="moment"><p>Moment</p></li>
                    				<li className="weatherb"><p>Open Weather Map</p></li>
                            <li className="redux"><p>Redux <span className="comment">partialy so far</span></p></li>
                            <li className="karma"><p>Karma & Mocha <span className="comment">some components</span></p></li>
                            <li className="firebase"><p>Firebase <span className="comment">not wired up yet</span></p></li>
                    			</ul>
                      </div>
                      <div className="container__footer">
                          <p>Keep looking forward for improvements....</p>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default About;
