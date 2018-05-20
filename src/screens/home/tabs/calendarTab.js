import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';

export default class calendarTab extends React.Component {
    static navigationOptions = {
        header: null,
    }
    
    render() {
        return (
          <View>
            <CalendarList current={'2018-01-01'} 
                pastScrollRange={0}
                futureScrollRange={12}/>
          </View>
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
