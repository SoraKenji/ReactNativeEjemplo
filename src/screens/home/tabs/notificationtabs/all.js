import React from 'react';
import { View,Text,TextInput,Dimensions }from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');
const tamanioSearchPart = 45;

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
            <View style={{height:tamanioSearchPart, backgroundColor: 'white', flexDirection: 'row'}}>
                <View style={{width: window.width, flexDirection: 'row'}}>
                    <View style={{flex: 1, height: tamanioSearchPart, borderWidth: 1, borderColor: 'gray', flexDirection: 'row'}}>
                        <View style={{width: window.width * 0.1, height: tamanioSearchPart, justifyContent:'center', alignItems: 'center'}}>
                            <Ionicons name='ios-search' size={25} color='black'/>
                        </View>

                        <View style={{width: window.width * 0.9, height: tamanioSearchPart}}>
                            <TextInput 
                                placeholder={'Buscar'}
                                style={{height: tamanioSearchPart}}/>
                        </View>
                    </View>
                </View>
            </View>
          )
      }
}