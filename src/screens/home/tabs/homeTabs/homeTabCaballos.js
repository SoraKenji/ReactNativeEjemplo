import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { TabNavigator, TabBarBottom } from "react-navigation";
import FirstScreen from './caballosTabs/individuosTabs';
import SecondScreen from './caballosTabs/gruposCabTabs';

var homeTabCaballos = TabNavigator({
    Individuos: { screen: FirstScreen },
    Grupos: { screen: SecondScreen },
    }, {
        tabBarPosition: 'top',
        swipeEnabled: false,
        tabBarOptions: {
            showLabel: true,
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#16AEA8',
            inactiveBackgroundColor: 'white',
            style: {backgroundColor: 'white', height: 40, padding: 0, margin: 0},
            labelStyle: {
                fontSize: 14,
                justifyContent: 'center'
            },
        },
        tabBarComponent: TabBarBottom,
        animationEnabled: false,
        swipeEnabled: false,
    }
);

homeTabCaballos.navigationOptions = {
}

export default homeTabCaballos;