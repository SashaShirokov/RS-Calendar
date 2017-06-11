import  React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';


class Weather extends React.Component {
    constructor(props) {
    		super(props);
        this.state = {
            isLoading: false
        }
        this.handleSearch = this.handleSearch.bind(this);
  	}

    test() {
        alert("keep working!")
    }

    handleSearch(location) {
        let that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
                alert(errorMessage);
        });
    }


    render() {
        let {isLoading, temp, location, errorMessage} = this.state;
        let that = this;

        function renderMessage() {
          if (isLoading) {
              return <h3 className="text-center ">Fetching weather...</h3>;
          } else if (temp && location) {
              return  <WeatherMessage temp={temp} location={location} test={that.test}/>
          }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
              return (
                <ErrorModal message={errorMessage}/>
              )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}

export default Weather;
