import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView,Image,TextInput, Dimensions, ActivityIndicator,TouchableHighlight } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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

  setPassword(pass){
    this.setState({password:pass})
  }

  setEmail(email){
    this.setState({email:email});
  }
  register(){
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
    <KeyboardAwareScrollView>
      <View>
        <View style={{flex:1}}>
        </View>
        <View style={styles.backgrroundLogin}>
          <TextInput
            style={{height: 40, width:200, borderColor: 'transparent', borderWidth: 1, color:'white',textAlign: 'center'}}
            onChangeText={(text) => this.setEmail(text)}
            selectionColor={'white'}
            placeholderTextColor={'white'}
            placeholder={'Correo de usuario'}
            underlineColorAndroid={'transparent'} />
        </View>
        <View style={styles.backgrroundLogin} >
          <TextInput
            style={{height: 40, width:200, borderColor: 'transparent', borderWidth: 1, color:'white',textAlign: 'center'}}
            onChangeText={(text) => this.setPassword(text)}
            underlineColorAndroid={'transparent'}
            secureTextEntry={true}
            selectionColor={'white'}
            placeholderTextColor={'white'}
            placeholder={'Contraseña'}/>
        </View>
        <Text style={{backgroundColor:'transparent'}}></Text>
        <Text style={{backgroundColor:'transparent'}}></Text>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight
            underlayColor="transparent">
            <View>
              <Text>Login</Text>
            </View>
          </TouchableHighlight>
          <Text style={{backgroundColor:'transparent'}}></Text>
          <TouchableHighlight underlayColor="transparent"
          onPress= {this.register.bind(this)}>
          <View>
            <Text>Registrarse</Text>
          </View>
          </TouchableHighlight>
        </View>
      </View>
    </KeyboardAwareScrollView>
    );
  }
}