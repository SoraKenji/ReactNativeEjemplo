import React from 'react';
import { StyleSheet, Text, View, ART } from 'react-native';

class dayClass extends Component {
    constructor(props) {
        super(props);
        this.state = {hasEvent: true, textNumber: '', textColor: ''};
    }
    render() {
        var daysOfTheMonth = [];

        for(let i = 0; i < 30; i++){
            daysOfTheMonth.push(
                <View style={{
                    width: 10, 
                    height: 10, 
                    borderRadius: 200, 
                    backgroundColor: 'white'}}><Text >{i}</Text>
                </View>
            )
        }
      return (
        
        <View>
            { daysOfTheMonth }
        </View>
      );
    }
  }

export default class monthsClass extends React.Component {
    

    render() {
        return ( 
        <View>
           
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