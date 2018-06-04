import React from 'react';
import { StackNavigator, HeaderBackButton, TabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Home from '../screens/home/home';
import Maincamera from '../screens/Maincamera';
import Today from '../screens/home/tabs/notificationtabs/today';
import All from '../screens/home/tabs/notificationtabs/all';

export const LogReg = StackNavigator({
    Main: {
        screen: Login,
    },
    Registro: {
        screen: Registro,
    },
    Home: {
        screen: Home,
    },
    Maincamera: {
        screen: Maincamera,
    }
}
);

export const NotifTab = TabNavigator({
    Today: {
        screen: Today,
        navigationOptions: {
            title: "Hoy",
        }
    },
    All: {
        screen: All,
        navigationOptions: {
            title: "Proximas",
        }
    },
},
    {
        tabBarOptions: {
            labelStyle:{
                fontSize:14
                },
                showLabel: true,
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#16AEA8',
                inactiveBackgroundColor: 'white',
                style: {backgroundColor: 'white', height: 50, padding: 0, margin: 0},
        },
        tabBarPosition: 'top'
    }

)