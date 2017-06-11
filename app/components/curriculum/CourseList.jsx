import  React from 'react';

import VideoList from 'VideoList';
import LectureList from 'LectureList';
import StyleGuideList from 'StyleGuideList';

class CourseList extends React.Component {
    render() {
        let {videos, lectures, styleguides, onHandleToggle, onHandleToggleL, onHandleToggleS} = this.props;
        return (
          <div>
              <VideoList videos={videos} onHandleToggle={onHandleToggle}/>
              <LectureList lectures={lectures} onHandleToggleL={onHandleToggleL}/>
              <StyleGuideList styleguides={styleguides} onHandleToggleS={onHandleToggleS}/>
          </div>
        );
    }
}

export default CourseList;
