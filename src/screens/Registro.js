import React, {Component} from "react";
import{View,Text,ActivityIndicator, Image,ImageBackground,TouchableHighlight,TextInput} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationActions, HeaderBackButton } from 'react-navigation';
const styles = require('../config/styles.js');
const constants = styles.constants;


 export default class Registro extends Component{
     static navigationOptions = {
      header:null
  
     
     
  }; 
        constructor(props) {
        super(props);
   
        this.state = {
         buttonState: 'upload',
         nombre:'0',
         email:'0',
         telefono:'0',
         password:'0',
         password_confirmation:'0',
         register:false,
         err:''

        };
      }
        setPassword_confirmation(pass) {
          this.setState({password_confirmation:pass});
     }

                 setPassword(pass) {
          this.setState({password:pass});
     }
     setEmail(input) {
          this.setState({email:input});
     }
       setTelefono(tel) {
          this.setState({telefono:tel});
     }

      setNombre(input) {
          this.setState({nombre:input});
     }
     _back=()=>{
        const backAction = NavigationActions.back({
        key: null
      })
      
       this.props.navigation.dispatch(backAction)

     }
        _userRegister2 =() => {

          this.setState({
            register:true
          });
       
         setTimeout(() =>{
          
         this._back();
       
        }, 2000);
         }

          

      _userRegister =() => { 
    let eml = this.state.email;
    let pass = this.state.password;
    let pass2 =this.state.password_confirmation;
    let nmb = this.state.nombre;
    let phone = this.state.telefono;

    console.log(nmb,eml,pass,phone);
    if(eml !='0' || pass !='0' || nmb != '0' || phone != '0' ){
   // if validation fails, value will be null
     fetch("http://152.74.16.149:3001/users", {
        method: "POST", 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nmb,
          telefono: phone,
          email: eml, 
          password: pass,
          password_confirmation:pass
        })
      })
      .then((response) => response.json()
      )
      .then((responseData) => {
        if(responseData.message){
           this.setState({
               err:responseData.message
             });
        }else{
          this._userRegister2();
        }
        console.log("login!",responseData.errors);

      // this._userRegister2();
       // this._onValueChange(STORAGE_KEY, responseData.id_token)
      }).catch((error) => {
         if(error == "TypeError: Network request failed"){
             this.setState({
               err:'Error de conexion'
             });
            }
           // console.log(error.message);
            console.log("error");
          
          })
      .done();
    
    }else{
      this.setState({
        err:'Debes completas los campos vacíos.'
      })
    }

 
  }

    render(){
        if(this.state.register == false){
        return (
               
<KeyboardAwareScrollView>   
        <View >
                <View style={{flex:1,marginTop:40}}>

                                 <View style={styles.backgrroundReg}>
              
              <TextInput
        style={{height: 40, width:200, borderColor: 'transparent', borderLeftWidth: 1, color:'white',textAlign: 'center',fontSize:13}}
        onChangeText={(text) => this.setNombre(text)}
      
        selectionColor={'white'}
        placeholderTextColor={'white'}
        placeholder={'Nombre'}
         underlineColorAndroid={'transparent'}
      />     
                    </View>

        
                                                     <View style={styles.backgrroundReg}>
             
              <TextInput
        style={{height: 40, width:200, borderColor: 'transparent', borderLeftWidth: 1, color:'white',textAlign: 'center',fontSize:13}}
        onChangeText={(text) => this.setEmail(text)}
      
        selectionColor={'white'}
        placeholderTextColor={'white'}
        placeholder={'Email'}
         underlineColorAndroid={'transparent'}
      />     
                    </View>

                <View style={styles.backgrroundReg}>
              
              <TextInput
        style={{height: 40, width:200, borderColor: 'transparent', borderLeftWidth: 1, color:'white',textAlign: 'center',fontSize:13}}
        onChangeText={(text) => this.setPassword(text)} secureTextEntry={true}
      
        selectionColor={'white'}
        placeholderTextColor={'white'}
        placeholder={'Contraseña'}
         underlineColorAndroid={'transparent'}
      />     
                    </View>

                       <View style={styles.backgrroundReg}>
             
              <TextInput
        style={{height: 40, width:200, borderColor: 'transparent', borderLeftWidth: 1, color:'white',textAlign: 'center',fontSize:13}}
        onChangeText={(text) => this.setTelefono(text)} 
      
        selectionColor={'white'}
        placeholderTextColor={'white'}
        placeholder={'Telefono'}
         underlineColorAndroid={'transparent'}
      />     
                    </View>


      <Text style={{backgroundColor:'transparent'}}> </Text>
                 <TouchableHighlight
                  onPress= {this._userRegister.bind(this)}
                  underlayColor="transparent"
                 >
                   <View style={styles.backgrroundLoginButton} >
                <Text style={styles.whitext}> Registrar </Text>
                 </View>
                      </TouchableHighlight>

                
                 <Text style={{backgroundColor:'transparent'}}> </Text>
                    <Text style={styles.txterror}>{this.state.err} </Text>
            </View>
                     </View>
                    </KeyboardAwareScrollView>
                    
        );}else{

          return(
           
            <View>
                  <ActivityIndicator animating={true}  style={{margin: 10}}/>
              <Text> Te has registrado! Volviendo al Inicio </Text>
              </View>
           

          );
        }

    }

}

