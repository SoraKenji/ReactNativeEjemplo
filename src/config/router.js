import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { Image }from 'react-native';
import Login from '../screens/Login';


export const LogReg = StackNavigator ({
        Main:{
            screen: Login,
        },
    }
);