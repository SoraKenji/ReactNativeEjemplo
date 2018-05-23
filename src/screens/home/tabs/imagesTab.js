import React from 'react';
import {  Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, 
    FlatList,Image} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class imagesTab extends React.Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
      super(props);
  
      this.state = {
        
        data: '',
        refreshing: false,
      };
    }
  

    render() {
        return (
          <View style={styles.container}>
            <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style = {styles.preview}
                
                type={RNCamera.Constants.Type.back}
                flashMode={'off'}
                permissionDialogTitle={'Permission to use camera'}
                permissionDialogMessage={'We need your permission to use your camera phone'}
            />
            <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          
             <Image
            style={{width: 50, height: 50}}
            source={{uri: this.state.data}}
          />

            
            <TouchableOpacity
                onPress={this.takePicture.bind(this)}
                style = {styles.capture}
            >
                <Text style={{fontSize: 14}}> Capturar </Text>
            </TouchableOpacity>
            </View>
          </View>
        );
      }
    
      takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          console.log(data.uri);
          this.setState({
            data: data.uri
          });

        }
      };
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
      }
    });