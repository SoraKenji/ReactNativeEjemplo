import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image, Modal, CameraRoll
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
var photosCache = [];
export default class Maincamera extends React.Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);

    this.state = {

      data: [],
      refreshing: false,
      modalVisible: false,
    };
  }
  componentWillMount() {
    photosCache = []
  }
  renderItems() {


  }

  setModalVisible() {
    let k = !this.state.modalVisible;

    this.setState({ modalVisible: k });
    // console.log(item);
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}

          type={RNCamera.Constants.Type.back}
          flashMode={'off'}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          <View style={styles.flat}>
            <FlatList
              data={this.state.data}
              extraData={this.state}
              horizontal={true}
              inverted={true}
              refreshing={true}
              renderItem={({ item }) => <Image style={styles.gallery} source={{ uri: item }}
              />}
            />

            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            >
              <Ionicons name={'md-camera'} size={30} color={'black'} />
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
            //onRequestClose={() => { alert("Modal has been closed."), this.setModalVisible(!this.state.modalVisible) }}
            >
              <View style={{ flex: 1, backgroundColor: 'red', borderRadius: 10, margin: '10%' }}>
                <Image
                  style={{ flex: 1, borderWidth: 10, borderColor: 'blue' }}
                  source={{ uri: this.state.data }}
                />
              </View>
              <Text>save </Text>

            </Modal>
          </View>
        </RNCamera>





      </View>

    );
  }

  takePicture = async function () {

    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      //console.log(data.uri);
      CameraRoll.saveToCameraRoll(data.uri, 'photo');
      photosCache.push(data.uri);

      this.setState({
        data: photosCache
      });
      console.log(photosCache)
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    margin: 20
  },
  gallery: {
    flex: 0,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    borderRadius: 5,

  },
  flat: {
    flex: 0,
    height: 200,

    backgroundColor: 'transparent',

    paddingHorizontal: 15,
    alignSelf: 'center',
    margin: 20
  }
});