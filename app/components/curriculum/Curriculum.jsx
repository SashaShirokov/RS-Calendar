import  React from 'react';

import CourseList from 'CourseList';
import CourseIntro from 'CourseIntro';
import courseAPI from 'courseAPI';
import GetInTouch from 'GetInTouch';

class Curriculum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          getintouch: false,
          videos: courseAPI.getVideos(),
          lectures: courseAPI.getLectures(),
          styleguides: courseAPI.getStylegides()
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleL = this.handleToggleL.bind(this);
        this.handleToggleS = this.handleToggleS.bind(this);
        this.get = this.get.bind(this);
        this.toggleGet = this.toggleGet.bind(this);
    }

    componentDidUpdate() {
        courseAPI.setVideos(this.state.videos);
        courseAPI.setLectures(this.state.lectures);
        courseAPI.setStyleguides(this.state.styleguides);
    }

    handleToggle(videos) {
        let updatedVideos = this.state.videos.map((video) => {
            video.hidden = !video.hidden;
            return video;
        })
        this.setState({videos: updatedVideos})
    }

    handleToggleL(lectures) {
        let updatedLectures = this.state.lectures.map((lecture) => {
            lecture.hidden = !lecture.hidden;
            return lecture;
        })
        this.setState({lectures: updatedLectures})
    }

    handleToggleS(styleguides) {
        let updatedStyleguides = this.state.styleguides.map((styleguide) => {
            styleguide.hidden = !styleguide.hidden;
            return styleguide;
        })
        this.setState({styleguides: updatedStyleguides})
    }

    get() {
      this.setState({
        getintouch: true
      })
    }

    toggleGet() {
        this.setState({
          getintouch: false
        })
    }

    render() {
        let {videos, lectures, styleguides, getintouch} = this.state;

        let renderGetInTouch = () => {
          if (getintouch === true) {
            return (
              <GetInTouch getintouch={getintouch} onToggleGet={this.toggleGet}/>
            )
          }

        }

        return (
          <div>
              <h1 className="text-center page-title">Curriculum of the Course</h1>
              <div className="row">
                  <div className="column small-centered small-11 medium-8 large-6">
                      <div className="container ">
                          <CourseIntro />
                          <CourseList videos={videos} lectures={lectures} styleguides={styleguides} onHandleToggle={this.handleToggle} onHandleToggleL={this.handleToggleL} onHandleToggleS={this.handleToggleS} />
                      </div>
                      <div className="container__footer">
                          <p>New lectures and videos might be added.</p>
                          <button onClick={this.get} className="button expanded">Get in Touch</button>
                          {renderGetInTouch()}
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Curriculum;
