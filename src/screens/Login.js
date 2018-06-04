import React, { Component } from 'react';
import { Button, Text, View, KeyboardAvoidingView, Image,TextInput, Dimensions, ActivityIndicator,TouchableHighlight } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalDropdown from 'react-native-modal-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');
const styles = require('../config/styles.js');

export default class Login extends Component{
  constructor(props) {
    super(props);
      this.state = {
        showText: true,
        email:'e',
        password:'p',
        progress:false,
        error:'',
        onLogin:true,
      };
  }

  static navigationOptions = {
    header: null
  }

  setPassword(pass){
    this.setState({password:pass})
  }

  setEmail(email){
    this.setState({email:email});
  }
  iniciar(){
    this.props.navigation.navigate('Home');
  }
  
  register(){
    this.props.navigation.navigate('Registro');
  }

  render() {
    return (
    <KeyboardAwareScrollView>
      <View style={{flex:1, backgroundColor: 'white'}}>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Image
            style={styles.contain}
            source={require('./EquilinkedLogo.png')}
          />
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <ModalDropdown style = {{
                                      width: 80,
                                      marginLeft: window.width-100,
                                      borderWidth: 0,
                                      borderRadius: 3,}}
                                      options={['Español',
                                      'English',
                                      'Русский']}
                                      defaultValue='Español'/>
              <Ionicons name='md-arrow-dropdown' size={20} color='#16AEA8'/>
          </View>
          <View style={{flexDirection: 'column', height: 80, marginTop: 10}}>
            <Text style={{width: 150, height: 30}}>Nombre de Usuario</Text>
            <TextInput style={{height: 30, borderColor: 'gray', borderWidth: 1, flex:1, marginRight: 10}}></TextInput>
          </View>
          <View style={{flexDirection: 'column', height: 80}}>
            <Text style={{width: 150, height: 30}}>Contraseña</Text>
            <TextInput style={{height: 30, borderColor: 'gray', borderWidth: 1, flex:1, marginRight: 10}}></TextInput>
          </View>
          <View style={{marginTop:20}}>
            <Button
              onPress={this.iniciar.bind(this)}
              title="INICIAR SESION"
              color="#00A7A5"
            />
          </View>
          <View style={{marginTop: 10, marginLeft: 20, marginRight: 20, borderBottomColor: 'gray', borderBottomWidth: 1}}></View>
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'gray'}}>Si no tienes una cuenta de Equilinked</Text>
          <View style={{marginTop:20}}>
            <Button
              onPress={this.register.bind(this)}
              title="REGISTRARSE"
              color="#00A7A5"
            />
          </View>
        </View>
    </KeyboardAwareScrollView>
    );
  }
}
