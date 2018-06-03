import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Arrow } from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Content, Button, Icon, Right, Body, Left, Picker } from "native-base";

export default class calendarTab extends React.Component {
  static navigationOptions = {
    header: null,

  }
  constructor(props) {
    super(props);

    this.state = {
      calendarMode: 0,
      currentYear: '2018-01-01',
      pressday: ''
    };
  }
  switchCalendar() {
    this.setState({
      calendarMode: 1,

    })
  }
  onValueChange(value) {
    this.setState({
      currentYear: value
    });
    console.log("valuechange", value);
    this.renderCalendar(value);
  }

  renderCalendar(value) {
    console.log("valuerender", value);
  
      return (
        <CalendarList
          //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          current={this.state.currentYear}
          pastScrollRange={0}
          futureScrollRange={12}
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          onDayPress={(day) => {
            console.log(day);
            this.setState({
              pressday: day.dateString,
              calendarMode: 1
            })
          }}

        />
      );
  }



  render() {
    if (this.state.calendarMode == 0) {
      return (
        <View>
          <View style={{ marginTop: 18, backgroundColor: 'white', alignItems: 'center', }}>
            <Picker
              iosHeader="Año"
              mode="dropdown"
              selectedValue={this.state.currentYear}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="2016" value="2016-01-01" />
              <Picker.Item label="2017" value="2017-01-01" />
              <Picker.Item label="2018" value="2018-01-01" />
              <Picker.Item label="2019" value="2019-01-01" />
              <Picker.Item label="2020" value="2020-01-01" />
            </Picker>
          </View>
          {this.renderCalendar()}
        </View>
      );
    } else {
      ;
      return (

        <View >
          <View style={{ marginTop: 18, backgroundColor: 'white', alignItems: 'flex-start', }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  calendarMode: 0
                })
              }}
              style={{ flex: 0, flexDirection: 'row', backgroundColor: 'white', margin: 2, width: 90, alignItems: 'center' }}
            >
              <Ionicons name={'md-arrow-back'} size={25} color={'black'} />
              <Text> {this.state.pressday} </Text>
            </TouchableOpacity>

          </View>
          <Calendar
            // Initially visible month. Default = Date()
            current={this.state.pressday}
            onDayPress={this.onDayPress}
            style={styles.calendar}
            hideExtraDays
            monthFormat={'MMMM'}
            // markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}

            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
          />
        </View>
      );
    }
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
