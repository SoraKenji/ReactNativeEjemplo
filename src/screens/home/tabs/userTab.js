import React from 'react';
import { Alert, Button, Text, View, StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class DobleBoton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { PageActive: 0};
    }

    _onPressButton(nPage) {
        this.setState({ PageActive: nPage });
    }

    _onHideUnderlay(){
        this.setState({ backgroundColor: 'white' });
    }
    _onShowUnderlay(){
        this.setState({ backgroundColor: 'green' });
    }

    render() {
        return (
            <View style={{height: 40, flexDirection: 'row'}}>
                <TouchableHighlight onPress={() => this._onPressButton(0)}
                    activeOpacity={1}
                    style={ this.state.PageActive == 0 ? styles.PaginaActiva :  styles.PaginaInactiva} 
                    underlayColor='transparent'>
                        <Text>DATOS</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._onPressButton(1)}
                    activeOpacity={1}
                    style={ this.state.PageActive == 1 ? styles.PaginaActiva :  styles.PaginaInactiva} 
                    underlayColor='transparent'>
                        <Text>ESTABLOS</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default class userTab extends React.Component {
    constructor(props) {
        super(props);
        var x = 0;
    }
    

    static navigationOptions = 
    {
        header: null,
    }
    render (){
        return (
        <View style={{flex: 1}}>
            <View style={{height: 40, marginTop: 25, flexDirection: 'row'}}>
                <View style={{flex: 0.8,
                            justifyContent: 'center', alignItems: 'center',
                            backgroundColor: 'white'}}><Text>MI PERFIL</Text></View>
                <View style={{flex: 0.2,
                            justifyContent: 'center', alignItems: 'center',
                            backgroundColor: 'white'}}><Text>...</Text></View>
            </View>
           <DobleBoton/>
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
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>NombreUsuario</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-person' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>NombreUsuario</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-mail' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>NombreUsuario</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-phone-portrait' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>NombreUsuario</Text>
                </View>
                <View style={{
                              flexDirection: 'row'}}>
                    <View style={{width: 50, alignItems: 'center'}}><Ionicons name='ios-flag' size={35} color='#16AEA8'/></View>
                    <Text style={{textAlignVertical: 'center', marginLeft: 10}}>NombreUsuario</Text>
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
    