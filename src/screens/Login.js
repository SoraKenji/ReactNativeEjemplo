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
        this.props.navigation.navigate('Registro');
      }
      _userLogin(){
        let eml = this.state.email;
        let pass = this.state.password;
    if (eml != 'e' || pass !='p') { // if validation fails, value will be null
      fetch("https://equilinked.azurewebsites.net/api/Usuario/Login", {
         method: "POST", 
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           UserName: eml, 
           Password: pass, 
         })
       })
       .then((response) => response.json())
       .then((responseData) => {
           console.log("rsdata:",responseData);
         console.log("login!",responseData);
        // this.saveSession();
         //this.setState({progress: false}); 
          this.props.navigation.navigate('Home');
        // this._onValueChange(STORAGE_KEY, responseData.id_token)
       }).catch((error) => {
             if(error == "TypeError: Network request failed"){
              this.setState({
                error:'Error de conexion',
                progress: false
              });
             }else{
                this.setState({
                error:'Email o Contraseña no valida',
              //  progress: false
              });
             }
              this.setState({progress: false});
           })
       .done();
     }else{
       this.setState({
         error:'Debes ingresar datos.',
         progress: false
       });
     }
    

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
             underlineColorAndroid={'transparent'}
          />     
                        </View>
    
          <View style={styles.backgrroundLogin} >
                    
                        <TextInput
            style={{height: 40, width:200, borderColor: 'transparent', borderWidth: 1, color:'white',textAlign: 'center'}}
            onChangeText={(text) => this.setPassword(text)}
            underlineColorAndroid={'transparent'}
              secureTextEntry={true}
              
            selectionColor={'white'}
            placeholderTextColor={'white'}
            placeholder={'Contraseña'}
           
          />
    
                    
                        </View>
                        <Text style={{backgroundColor:'transparent'}}> </Text>
                       
                          <Text style={{backgroundColor:'transparent'}}> </Text>
    
                          <View style={{alignItems: 'center',}} >
                          
                     
                        <TouchableHighlight
                      onPress= {this._userLogin.bind(this)}
                      underlayColor="transparent"
                     >
                    <View >
                    <Text > Login </Text>
                     </View>
                          </TouchableHighlight>
    
    
     <Text style={{backgroundColor:'transparent'}}> </Text>
                         <TouchableHighlight
                      onPress= {this.register.bind(this)}
                     // underlayColor="transparent"
                     >
                       <View  >
                    <Text > Registrarse </Text>
                     </View>
                          </TouchableHighlight>
    
    
    
                          </View>
                          
                         </View>
                       
                        </KeyboardAwareScrollView>
                         
    );
  }
}