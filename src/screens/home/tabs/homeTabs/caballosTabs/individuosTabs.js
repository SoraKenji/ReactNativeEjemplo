import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, Dimensions } from 'react-native';
import { SearchBar } from'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

const window = Dimensions.get('window');
const tamanioSearchPart = 45;
export default class individuosTabs extends React.Component {
    static navigationOptions = {
        header: null,
    }
    register(){
        //this.props.navigation.navigate('agregarCaballo');
    }
    
    render() {
        return ( 
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{height:tamanioSearchPart, backgroundColor: 'white', flexDirection: 'row'}}>
                    <View style={{width: window.width * 0.9, flexDirection: 'row'}}>
                        <View style={{flex: 1, height: tamanioSearchPart, borderWidth: 1, borderColor: 'gray', flexDirection: 'row'}}>
                            <View style={{width: window.width * 0.1, height: tamanioSearchPart, justifyContent:'center', alignItems: 'center'}}>
                                <Ionicons name='ios-search' size={25} color='black'/>
                            </View>

                            <View style={{width: window.width * 0.8, height: tamanioSearchPart}}>
                                <TextInput 
                                    style={{height: tamanioSearchPart}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{width: window.width * 0.4, backgroundColor: 'white'}}>
                        <View style={{flex: 1, height: tamanioSearchPart, borderWidth: 1, borderColor: 'gray'}}>
                            <View style={{width: window.width * 0.1, height: tamanioSearchPart, justifyContent:'center', alignItems: 'center'}}>
                                <Ionicons name='md-arrow-dropdown' size={25} color='black'/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'white', marginLeft: 10, marginTop: 10, marginRight: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableHighlight onPress={this.register.bind(this)} underlayColor="#f8f8ff">
                            <View style={{flexDirection: 'row'}}>
                                <View style={{width: 75, alignItems: 'center'}}>
                                    <Ionicons name='ios-add-circle' size={70} color='#16AEA8'/>
                                </View>
                                <Text style={{width: window.width - 65, textAlignVertical: 'center', marginLeft: 10}}>Agregar nuevo</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                        <View style={{width: 75, alignItems: 'center'}}>
                            <Ionicons name='ios-arrow-dropright' size={70} color='#16AEA8'/>
                        </View>
                        <Text style={{textAlignVertical: 'center', marginLeft: 10}}>Nombre_Caballo_1</Text>
                    </View>
                </View>
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
