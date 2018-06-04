import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { TabNavigator, TabBarBottom } from "react-navigation";
import FirstScreen from './homeTabs/homeTabCaballos';
import SecondScreen from './homeTabs/homeTabVeterinarios';
import ThirdScreen from './homeTabs/homeTabFotos';

var homeTab = TabNavigator({
    Caballos: { screen: FirstScreen },
    Veterinarios: { screen: SecondScreen },
    Fotos: { screen: ThirdScreen },
    }, {
        tabBarPosition: 'top',
        swipeEnabled: false,
        tabBarOptions: {
            showLabel: true,
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#16AEA8',
            inactiveBackgroundColor: 'white',
            style: {backgroundColor: 'white', height: 50, padding: 0, margin: 0},
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

homeTab.navigationOptions = {
}

export default homeTab;
