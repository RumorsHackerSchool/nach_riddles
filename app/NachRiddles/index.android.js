import React from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/HomeScreen';

export default class NachRiddles extends React.Component {

  render() {
   return (
     <View>
       <Text>this is Lucy component</Text>
     </View>
    );
  }
}




// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('NachRiddles', () => NachRiddles);
