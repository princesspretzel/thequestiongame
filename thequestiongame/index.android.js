/**
 * the question game React Native App
 * https://github.com/princesspretzel/thequestiongame
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class thequestiongame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          the question game
        </Text>
        <Text style={styles.instructions}>
          instructions:
          assign everyone a number
          go around in a circle taking turns asking questions
          when you hit "ask the question", the person assigned to that number answers the question aloud
          but in their heads, everyone secretly answers >>>:)
        </Text>
        <Text style={styles.footer}>
          questions are more revealing than answers
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 1,  
  },
});

AppRegistry.registerComponent('thequestiongame', () => thequestiongame);
