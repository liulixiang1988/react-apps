'user strict';

import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});


export default class WeatherProject extends Component {

  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
  }

  _handleTextChange(event){
    console.log(event.nativeEvent.text);
    this.setState({
      city: event.nativeEvent.text
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          城市：{this.state.city}
        </Text>
        <TextInput style={styles.input} onSubmitEditing={this._handleTextChange.bind(this)}/>
      </View>
    );
  }
}
