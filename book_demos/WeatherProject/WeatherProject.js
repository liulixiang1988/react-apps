'user strict';

import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


import Forecast from './Forecast';

const baseFontSize = 16;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30,
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cityContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  cityName: {
    width: 50,
    height: baseFontSize,
    textAlign:'center',
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF',
  }

});


export default class WeatherProject extends Component {

  constructor(props){
    super(props);
    this.state = {
      city: '',
      forecast: null
    }
  }

  _handleTextChange(event){
    let city = event.nativeEvent.text;
    var city_code = '';
    console.log(city);
    this.setState({
      city: city
    });
    fetch('https://api.heweather.com/x3/citylist?search=allchina&key=ef29baab02f049adaa4ce2afba6f29b9')
      .then((response)=>response.json())
      .then((responseJson)=>{
        console.log(responseJson);
        for(var item of responseJson.city_info){
          if (item.city == city){
            console.log("city");
            this._getWeatherInfo(item.id);
          }
        }
      })
      .catch((error)=>{
        console.warn(error);
      });
  }

  _getWeatherInfo(city_code){
    let url = 'https://api.heweather.com/x3/weather?cityid='+city_code+'&key=ef29baab02f049adaa4ce2afba6f29b9';
    console.log(url);
    fetch(url)
      .then((response)=>response.json())
      .then((responseJson)=>{
        let weatherInfo = responseJson["HeWeather data service 3.0"][0];
        console.log(weatherInfo);
        var description = null
        if (weatherInfo.aqi&&weatherInfo.aqi.city.qlty){
          description = weatherInfo.aqi.city.qlty;
        } else {
          description = weatherInfo.daily_forecast[0].wind.dir+" "+weatherInfo.daily_forecast[0].wind.sc+"级"
        }
        this.setState({
          forecast:{
            main: weatherInfo.daily_forecast[0].cond.txt_d,
            description: description,
            temp: weatherInfo.daily_forecast[0].tmp.min+'~'+weatherInfo.daily_forecast[0].tmp.max
          }
        });
      })
      .catch((error)=>{console.warn(error);});
  }

  render() {
    var content = null;
    if (this.state.forecast !== null){
      content = <Forecast 
              main={this.state.forecast.main}
              description={this.state.forecast.description}
              temp={this.state.forecast.temp}/>;
    }
    return (
      <View style={styles.container}>
        <Image source={require('image!flowers')}
               resizeMode='cover'
               style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <View style={styles.cityContainer}>
                <TextInput
                  style={[styles.cityName, styles.mainText]}
                  returnKeyType='go'
                  onSubmitEditing={this._handleTextChange.bind(this)}/>
              </View>
              <Text style={styles.mainText}>
                天气
              </Text>
            </View>
            {content}
          </View>
        </Image>
      </View>
    );
  }
}
