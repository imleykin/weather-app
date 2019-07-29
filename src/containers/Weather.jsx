import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Weather.sass';
import { requestWeather } from '../actions/weather';

class Weather extends React.Component {
  renderLoadingSpinner = () => (
    <div className="app__weather app-weather">
      {'loading...'}
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );

  renderWeather = () => {
    const { error } = this.props;

    if (this.props.error) {
      return <div className="app__weather app-weather">{error}</div>;
    }

    const {
      city,
      icon,
      description,
      temp,
      pressure,
      humidity,
      visibility,
      windSpeed,
    } = this.props.weather;

    if (!city) {
      return null;
    }

    return (
      <div className="app__weather app-weather">
        <p>{city}</p>
        <img
          alt="weather icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <p>{description}</p>
        <p>{temp}°</p>
        <p>pressure: {pressure}hPa</p>
        <p>humidity: {humidity}%</p>
        <p>visibility: {visibility}</p>
        <p>wind: {windSpeed} m/s</p>
      </div>
    );
  };

  componentDidMount() {
    const { city } = this.props.match.params;
    const { requestWeather } = this.props;
    if (city) {
      requestWeather(city);
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="container">
        {isLoading ? this.renderLoadingSpinner() : this.renderWeather()}
      </div>
    );
  }
}

const mapStateToProps = store => store.weather;
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWeather }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
