'user strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';


const styles = StyleSheet.create({
  flex: {
    alignItems: 'center',
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  }
});


export default class Forecast extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp}°C
        </Text>
      </View>
    );
  }
}
