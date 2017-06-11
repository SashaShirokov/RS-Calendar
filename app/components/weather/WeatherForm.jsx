import React from 'react';

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault();

        let location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        } else {
            this.refs.location.focus();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="columns large-6 medium-8 small-centered">
                    <form onSubmit={this.onFormSubmit}>
                        <input type="text" ref="location" placeholder="Search weather by city" />
                        <button className="button expanded hollow">Get Weather</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default WeatherForm;
