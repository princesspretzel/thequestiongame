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
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#fdfdfd',
  },
  title: {
    fontSize: 40,
    marginLeft: 30,
    marginTop: 30,
  },
  instructions: {
    marginLeft: 30,
  },
  footer: {
    fontStyle: 'italic',
    marginLeft: 80,  
    textAlign: 'right',
  },
});

AppRegistry.registerComponent('thequestiongame', () => thequestiongame);
