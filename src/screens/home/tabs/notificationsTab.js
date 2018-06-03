import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NotifTab} from '../../../config/router';
export default class notificationsTab extends React.Component {
    static navigationOptions = {
        title:'Notificaciones',
        headerLeft:null,
        headerRight: <Text>x</Text>
    
    }
    
    render() {
        return ( 
        <NotifTab/>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
