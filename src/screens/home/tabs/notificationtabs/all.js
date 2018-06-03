import React from 'react';
import { Text }from 'react-native';

export default class all extends React.Component {
    static navigationOptions = {
      title:'Proximas'
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
              <Text> all </Text>
          )
      }
}