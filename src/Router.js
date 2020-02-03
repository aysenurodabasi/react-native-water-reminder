import React from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Information from './screens/Information'
import FirstPage from './screens/FirstPage'
import Settings from './screens/Settings'
import SplashPage from './screens/SplashPage'
import ChangeWeight from './screens/ChangeWeight'
import ChangeAmount from './screens/ChangeAmount'
import Calendar from './screens/Calendar'
import 'react-native-gesture-handler'

const AppStack = createStackNavigator({
    FirstPage: FirstPage,
    Information: Information,
    Home: Home,
    Settings: Settings,
    SplashPage: SplashPage,
    ChangeAmount:ChangeAmount,
    ChangeWeight:ChangeWeight,
},{
  initialRouteName: 'SplashPage',
  headerLayoutPreset: 'center',
  defaultNavigationOptions:{
    title: 'Water Reminder',
    headerBackTitle: null,
    //backgroundcolor
    headerStyle:{
      backgroundColor: '#3F51B5'
    },
    headerTintColor: 'white',
    headerTitleStyle:{
      fontWeight: '400'
    }
  }
});

const SettingsModal= createStackNavigator({
    Main: AppStack,
    Settings : Settings,
    ChangeAmount: ChangeAmount,
    ChangeWeight: ChangeWeight,
    Calendar:Calendar
},{
  mode: "modal",
  headerMode: "none"
});

export default AppContainer=createAppContainer(SettingsModal);