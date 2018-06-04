import React from 'react';
import { Alert, Button, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const window = Dimensions.get('window');
const tamanioSearchPart = 45;

const CustomHeader = ({ title, subtitle }) => (
    <View style={{marginTop: 25, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', height: 40}}>
            <View style={{width: window.width*0.95, justifyContent: 'center', alignItems:'flex-end'}}>
                <Ionicons name='md-more' size={35} color='black'/>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
                <Text style={{textAlign: 'center', width: window.width}}>{title}</Text>
            </View>
            
        </View>
    </View>
  );

export default class userTab extends React.Component {
    constructor(props) {
        super(props);
        var x = 0;
    }
    
    static navigationOptions = 
    {
        header: <CustomHeader title="MI PERFIL" subtitle="World" />
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