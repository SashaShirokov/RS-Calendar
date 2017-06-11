import  React from 'react';

class CourseItem extends React.Component {
    render() {
        let {text, url} = this.props;
            return (
                <div className="courseItem">
                    <a className="container__header--link" href={url} target="blank">{text}...</a>
                </div>
          );
    }
}

export default CourseItem;
