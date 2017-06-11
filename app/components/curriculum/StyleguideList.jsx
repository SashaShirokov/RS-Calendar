import  React from 'react';
import CourseItem from 'CourseItem';

class StyleguideList extends React.Component {
      render() {
        let {styleguides, onHandleToggleS} = this.props;
        let renderStyleguides = () => {
          return styleguides.map((styleguide) => {
              if (styleguide.hidden === false) {
                return (
                    <CourseItem key={styleguide.id} {...styleguide} />
                )
              }
          })
        }
        return (
          <div onClick={() => {
                onHandleToggleS(styleguides)
              }}>
              <h3 className="listTitle">Styleguides</h3>
              {renderStyleguides()}
          </div>
        );
    }
}

export default StyleguideList;
