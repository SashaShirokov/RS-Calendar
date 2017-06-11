import  React from 'react';

class CourseIntro extends React.Component {
    render() {
        return (
          <div className="container__header">
              <p>Find out more about the course.</p>
              <a className="container__header--link" href="https://github.com/rolling-scopes/front-end-course/wiki/Course-Intro" target="blank">Introduction...</a>
          </div>
        );
    }
}


export default CourseIntro;
