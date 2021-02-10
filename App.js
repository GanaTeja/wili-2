import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen';
import {TabNavigator} from './components/tabNavigator'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
export default class App extends React.Component {
  render() {
    return (
     <AppContainer>

     </AppContainer>
    );
  }
}
const AppNavigator=createSwitchNavigator({
  welcome:WelcomeScreen,
  bottomTab:TabNavigator
})
const AppContainer = createAppContainer(AppNavigator)