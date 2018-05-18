import React from 'react';
import { StyleSheet, Text, View } from 'react-native';//Componentes que voy a usar

import { TabNavigator, TabBarBottom } from "react-navigation";
import FirstScreen from './tabs/homeTab';
//import SecondScreen from './Tabs/fichasTab';
//import ThirdScreen from './Tabs/examenTab';
//import FourthScreen from './Tabs/pagosTab';
//import FifthScreen from './Tabs/usuarioTab';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default TabNavigator({
    homeTab: {screen: FirstScreen},
    //fichasTab: {screen: SecondScreen},
    //examenTab: {screen: ThirdScreen},
    //pagosTab: {screen: FourthScreen},
    //usuarioTab: {screen: FifthScreen}
  },
  {
    navigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        
        let iconName;
        if (routeName === 'homeTab')
        {
          if (focused) {
            iconName = 'ios-calendar-outline';
          }else{
            iconName = 'ios-calendar';
          }
        }
        else if(routeName === 'fichasTab'){
          if (focused) {
            iconName = 'ios-clipboard-outline';
          }else{
            iconName = 'ios-clipboard';
          }
        }
        else if(routeName === 'examenTab'){
          if (focused) {
            iconName = 'ios-medkit-outline';
          }else{
            iconName = 'ios-medkit';
          }
        }
        else if(routeName === 'pagosTab'){
          if (focused) {
            iconName = 'ios-cash-outline';
          }else{
            iconName = 'ios-cash';
          }
        }
        else if(routeName === 'usuarioTab'){
          if (focused) {
            iconName = 'ios-contact-outline';
          }else{
            iconName = 'ios-contact';
          }
        }
        return <Ionicons name={iconName} size={40} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#16AEA8',
      inactiveBackgroundColor: 'white',
      style: {backgroundColor: 'white', height: 60, padding: 0, margin: 0}
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  });