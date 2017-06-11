import  React from 'react';
import CourseItem from 'CourseItem';

class VideoList extends React.Component {

    render() {
        let {videos, onHandleToggle} = this.props;
        let renderVideos = () => {
          return videos.map((video) => {
              if (video.hidden === false) {
                return (
                    <CourseItem key={video.id} {...video} />
                )
              }
          })
        }

        return (
          <div onClick={() => {
                onHandleToggle(videos)
              }}>
              <h3 className="listTitle">Videos</h3>
              {renderVideos()}
          </div>
        );
    }
}

export default VideoList;
