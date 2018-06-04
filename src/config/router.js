import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { Image }from 'react-native';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Home from '../screens/home/home';
import agregarCaballo from '../screens/home/tabs/homeTabs/caballosTabs/agregarCaballo/agregarCaballoPage';

export const LogReg = StackNavigator ({
        Main:{
            screen: Login,
        },
        Registro:{
            screen: Registro,
        },
        Home:{
            screen: Home,
        },
        agregarCaballo:{
            screen: agregarCaballo,
        }
    }
);