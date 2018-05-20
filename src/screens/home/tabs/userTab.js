import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class userTab extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        var year = [];
        var columnMonths = [];
        var Month = [];
        var weekOfTheMonth = [];
        var daysOfTheWeek = [];
        var dia = '';
        var k = 0;
        var numberOfDay = 1;

        var firsttime = 0;
        var d = new Date(2018, 2, 1);
        
        var daysInTheMonth = new Date(2018, 2, 0).getDate();
        var dayofweek=d.getDay(),
        date = d.getDate(),
        month = d.getMonth(),
        year = d.getFullYear();

        //'L','M','M','J','V','S','D'
        for(let y = 0; y < 6; y++){
            for(let x = 0; x < 2; x++){
                weekOfTheMonth.push(
                    <View key = {k} style={{
                        flexDirection: 'row'}}>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>L</Text></View>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>M</Text></View>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>M</Text></View>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>J</Text></View>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>V</Text></View>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>S</Text></View>
                        <View key = {k} style={{
                            width: 20, 
                            height: 20, 
                            justifyContent: 'center',
                            borderRadius: 20, alignItems: 'center',
                            backgroundColor: 'white'}}>
                            <Text>D</Text></View>
                    </View>
                )


                for(let i = 0; i < 5; i++){
                    daysOfTheWeek = [];
                    for(let j = 0; j < 7 ; j++){
                        if(firsttime != 0){
                            if(numberOfDay <= daysInTheMonth){
                                daysOfTheWeek.push(
                                    <View key = {k} style={{
                                        width: 20, 
                                        height: 20, 
                                        justifyContent: 'center',
                                        borderRadius: 20, alignItems: 'center',
                                        backgroundColor: 'white'}}><Text >{numberOfDay}</Text>
                                    </View>
                                )
                                numberOfDay++;
                            }
                            else{
                                break;
                            }
                        }else{
                            daysOfTheWeek.push(
                                <View key = {k} style={{
                                    width: 20, 
                                    height: 20, 
                                    justifyContent: 'center',
                                    borderRadius: 20, alignItems: 'center',
                                    backgroundColor: 'white'}}><Text > </Text>
                                </View>
                            );
                            if(date < j){
                                firsttime = 1;
                            }
                        }
                        k++;
                    }
                    weekOfTheMonth.push(
                            <View key = {k} style={{
                                flexDirection: 'row'}}>
                                    {daysOfTheWeek}
                            </View>
                    )
                }
                Month.push(
                    <View key = {k} style={{
                        flexDirection: 'column'}}>
                            {weekOfTheMonth}
                    </View>
                )
            }
            columnMonths.push(
                <View key = {k} style={{
                    flexDirection: 'column'}}>
                    {Month}
                </View>
            )
        }
        return (
        <View>
            { Month }
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
