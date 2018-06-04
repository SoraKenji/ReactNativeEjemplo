import React from 'react';
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
// import { Constants } from 'expo';

const CustomHeader = ({ title, subtitle }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen
    banner="Home Screen"
    navigation={navigation}
    title="Main Title"
    subtitle="SubTitle"
  />
);

MyHomeScreen.navigationOptions = ({ title, subtitle }) => {
  return {
    headerTitle: <CustomHeader title="Hello" subtitle="World" />,
  };
};

const MyPhotosScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
);
MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
);

MyProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

const SimpleStack = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Profile: {
      path: 'people/:name',
      screen: MyProfileScreen,
    },
    Photos: {
      path: 'photos/:name',
      screen: MyPhotosScreen,
    },
  },
  {
    navigationOptions: {
      // headerStyle: { marginTop: Constants.statusBarHeight },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <SimpleStack />;
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fc0',
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'purple',
    fontWeight: 'bold',
  },
});