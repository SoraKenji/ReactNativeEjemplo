import React from 'react';
import { Alert, Button, Text, View, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class userTab extends React.Component {
    constructor(props) {
        super(props);
        var x = 0;
    }
    
    static navigationOptions = 
    {
        
    }
    render (){
        return (
            
        <View style={{flex: 1}}>
            <ScrollView>
            <View style={{height: 250}}>
                <Image
                    style={{flex: 1, 
                    width: null,
                    height: null,
                    resizeMode: 'contain'}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            </View>
            <View style={{height: 300, marginLeft: 25, marginTop: 15, marginRight: 25}}>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-finger-print' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>Usuario_Id</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-person' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>Usuario_Nombre</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-mail' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>Usuario_Mail</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-phone-portrait' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>TelefonoUsuario</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-flag' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>Residencia_Usuario</Text>
                </View>
            </View>

            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    PaginaActiva: {
        flex: 1,
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        borderRightColor: 'gray',
        borderRightWidth: 0.5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#16AEA8',
    },
    PaginaInactiva: {
        flex: 1,
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        borderRightColor: 'gray',
        borderRightWidth: 0.5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    TextoActivo: {
        
    },
    TextoInactivo: {
        color: '#FF00FF'
    }
});