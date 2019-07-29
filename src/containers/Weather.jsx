import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Weather.sass';
import { requestWeather } from '../actions/weather';
import { capitalize } from 'lodash';

class Weather extends React.Component {
  renderLoadingSpinner = () => (
    <div
      className="app-weather__spinner spinner-border text-primary"
      role="status"
    />
  );

  renderWeather = () => {
    const { error } = this.props;

    if (error) {
      return <div className="app-weather__error">{error}</div>;
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
    } = this.props.data;

    if (!city || !temp) {
      return null;
    }

    return (
      <>
        <p className="app-weather__city">{city}</p>
        <img
          className="app-weather__icon"
          alt="weather icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
        <p className="app-weather__temp">
          {temp}°, {capitalize(description)}
        </p>
        {pressure ? <p>pressure: {pressure}hPa</p> : null}
        {humidity ? <p>humidity: {humidity}%</p> : null}
        {visibility ? <p>visibility: {visibility} meters</p> : null}
        {windSpeed ? <p>wind: {windSpeed} m/s</p> : null}
      </>
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
        <div className="app__weather app-weather">
          {isLoading ? this.renderLoadingSpinner() : this.renderWeather()}
        </div>
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
