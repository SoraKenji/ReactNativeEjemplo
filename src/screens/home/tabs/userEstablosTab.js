import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { TabNavigator, TabBarBottom } from "react-navigation";
import FirstScreen from './userEstablosTabs/userTab';
import SecondScreen from './userEstablosTabs/establosTab';
import Ionicons from 'react-native-vector-icons/Ionicons'

const window = Dimensions.get('window');

var userEstablosTab = TabNavigator({
    DATOS: { screen: FirstScreen },
    ESTABLOS: { screen: SecondScreen },
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


const CustomHeader = ({ title, subtitle }) => (
    <View style={{marginTop: 25}}>
        <View style={{flexDirection: 'row', height: 40}}>
            <View style={{width: window.width*0.95, justifyContent: 'center', alignItems:'flex-end'}}>
                <Ionicons name='md-more' size={35} color='black'/>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
                <Text style={{textAlign: 'center', width: window.width}}>{title}</Text>
            </View>
            
        </View>
    </View>
  );

userEstablosTab.navigationOptions = {
    header: <CustomHeader title="MI PERFIL" subtitle="World" />
    
}

export default userEstablosTab;

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fc0',
      height: 45,
      alignSelf: 'stretch',
    },
    title: {
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      color: 'purple',
      fontWeight: 'bold',
    },
});