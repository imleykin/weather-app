import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Weather.sass';

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

  renderCurrentWeather = () => {
    const { city } = this.props;

    if (!city) {
      return null;
    }

    return (
      <div className="app__weather app-weather">
        {`Погода в городе `} {city}
      </div>
    );
  };

  render() {
    const { isLoading } = this.props;
    console.log(isLoading);
    return (
      <div className="container">
        {isLoading ? this.renderLoadingSpinner() : this.renderCurrentWeather()}
      </div>
    );
  }
}

const mapStateToProps = store => store.weather;
const mapDispatchToProps = dispatch => bindActionCreators({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
