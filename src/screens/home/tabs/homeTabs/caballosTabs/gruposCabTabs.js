import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');
const tamanioSearchPart = 45;

export default class gruposCabTabs extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return ( 
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{height:tamanioSearchPart, backgroundColor: 'white', flexDirection: 'row'}}>
                <View style={{width: window.width, flexDirection: 'row'}}>
                    <View style={{flex: 1, height: tamanioSearchPart, borderWidth: 1, borderColor: 'gray', flexDirection: 'row'}}>
                        <View style={{width: window.width * 0.1, height: tamanioSearchPart, justifyContent:'center', alignItems: 'center'}}>
                            <Ionicons name='ios-search' size={25} color='black'/>
                        </View>

                        <View style={{width: window.width * 0.9, height: tamanioSearchPart}}>
                            <TextInput 
                                style={{height: tamanioSearchPart}}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, backgroundColor: 'white', marginLeft: 10, marginTop: 10, marginRight: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 75, alignItems: 'center'}}>
                        <Ionicons name='ios-add-circle' size={70} color='#16AEA8'/>
                    </View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>Agregar nuevo</Text>
                </View>
                <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                    <View style={{width: 75, alignItems: 'center'}}>
                        <Ionicons name='ios-arrow-dropright' size={70} color='#16AEA8'/>
                    </View>
                    <View style={{backgroundColor: 'white', flexDirection: 'column'}}>
                        
                        <Text style={{textAlignVertical: 'center', marginLeft: 10, flex: 1}}>Todos mis caballos</Text>
                        <Text style={{textAlignVertical: 'center', marginLeft: 10, flex: 1}}>1</Text>
                    </View>
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
