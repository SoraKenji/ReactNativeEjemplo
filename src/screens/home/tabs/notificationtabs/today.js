import React from 'react';
import { Text }from 'react-native';

export default class today extends React.Component {
    static navigationOptions = {
       title:'Hoy'
      }

    constructor(props) {
        super(props);
    
        this.state = {
          calendarMode: 0,
          currentYear: '2018-01-01',
          pressday: ''
        };
      }

      render(){
          return(
              <Text> today </Text>
          )
      }
}