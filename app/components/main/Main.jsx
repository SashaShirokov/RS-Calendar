import React from 'react';

import  MainNav from 'MainNav';

class Main extends React.Component {
    render() {
        return (
            <div>
                <MainNav/>
                <div className="row">
                    <div className="columns small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
