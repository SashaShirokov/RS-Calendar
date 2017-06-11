import  React from 'react';
import CourseItem from 'CourseItem';

class LectureList extends React.Component {
    render() {
        let {lectures, onHandleToggleL} = this.props;
        let renderLectures = () => {
          return lectures.map((lecture) => {
              if (lecture.hidden === false) {
                return (
                    <CourseItem key={lecture.id} {...lecture} />
                )
              }
          })
        }
        return (
          <div onClick={() => {
                onHandleToggleL(lectures)
              }}>
              <h3 className="listTitle">Lectures</h3>
              {renderLectures()}
          </div>
        );
    }
}

export default LectureList;
