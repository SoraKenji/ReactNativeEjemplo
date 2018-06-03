import React from 'react';
import { StyleSheet, Text, View } from 'react-native';//Componentes que voy a usar

import { TabNavigator, TabBarBottom } from "react-navigation";
import FirstScreen from './tabs/homeTab';
import SecondScreen from './tabs/calendarTab';
import ThirdScreen from './tabs/imagesTab';
import FourthScreen from './tabs/notificationsTab';
import FifthScreen from './tabs/userEstablosTab';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default TabNavigator({
    homeTab: {screen: FirstScreen},
    calendarTab: {screen: SecondScreen},
    imagesTab: {screen: ThirdScreen},
    notificationsTab: {screen: FourthScreen},
    userTab: {screen: FifthScreen}
  },
  {
    navigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconName;
        if (routeName === 'homeTab')
        {
          if (focused) {
            iconName = 'ios-home-outline';
          }else{
            iconName = 'ios-home';
          }
        }
        else if(routeName === 'calendarTab'){
          if (focused) {
            iconName = 'ios-calendar-outline';
          }else{
            iconName = 'ios-calendar';
          }
        }
        else if(routeName === 'imagesTab'){
          if (focused) {
            iconName = 'ios-images-outline';
          }else{
            iconName = 'ios-images';
          }
        }
        else if(routeName === 'notificationsTab'){
          if (focused) {
            iconName = 'ios-list-outline';
          }else{
            iconName = 'ios-list';
          }
        }
        else if(routeName === 'userTab'){
          if (focused) {
            iconName = 'ios-person-outline';
          }else{
            iconName = 'ios-person';
          }
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#16AEA8',
      inactiveBackgroundColor: 'white',
      style: {backgroundColor: 'white', height: 50, padding: 0, margin: 0}
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  });