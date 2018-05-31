import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { Image }from 'react-native';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Home from '../screens/home/home';
import Maincamera from '../screens/Maincamera';

export const LogReg = StackNavigator ({
        Main:{
            screen: Login,
        },
        Registro:{
            screen:Registro,
        },
        Home:{
            screen:Home,
        },
        Maincamera:{
            screen:Maincamera,
        }
    }
);