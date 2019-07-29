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
    const { city, error } = this.props;

    if (error) {
      return <div className="app__weather app-weather">{error}</div>;
    }

    if (!city) {
      return null;
    }

    return (
      <div className="app__weather app-weather">
        {`Погода в городе `} {city}
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
