import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Image, Modal, TouchableHighlight, CameraRoll, ScrollView, Button
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Maincamera } from '../../Maincamera';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class imagesTab extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    
  }
  componentWillMount() {
  


    fetch("https://equilinked.azurewebsites.net/api/propietarios/37/albumes", {
      //fetch("https://equilinked.azurewebsites.net/api/propietarios/37/fotografias/854", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("photodata:", responseData);
        // this.saveSession();
        //this.setState({progress: false}); 
        this.setState({
          photo: Image
        });
        console.log(responseData.ID);
      }).catch((error) => {
        if (error == "TypeError: Network request failed") {
          this.setState({
            error: 'Error de conexion',
            progress: false
          });
        } else {
          this.setState({
            error: 'Email o Contraseña no valida',
            //  progress: false
          });
        }
        this.setState({ progress: false });
      })
      .done();
  }






  camera() {
    this.props.navigation.navigate('Maincamera');
  }

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
      groupTypes: 'Album',
    })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        //Error Loading Images
      });
  };
  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <Button title="Takephoto" onPress={this.camera.bind(this)} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100,
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
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