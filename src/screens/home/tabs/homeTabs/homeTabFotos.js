import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class homeTabFotos extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return ( 
        <View>
            <Text>-En trabajo-
                </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
