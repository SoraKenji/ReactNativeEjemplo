import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAwareScrollView, ScrollView  } from 'react-native';


const CustomHeader = ({ title, subtitle }) => (
    <View style={{marginTop: 25, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', height: 40, width: window.width}}>
            <View style={{flex: 1, width: window.width/2, justifyContent: 'center'}}>
                <Text style={{textAlign: 'left', marginLeft: 20}}>Cancelar</Text>
            </View>
            <View style={{flex:1, width: window.width/2, justifyContent: 'center'}}>
                <Text style={{textAlign: 'right', marginRight: 20}}>Siguiente</Text>
            </View>
        </View>
    </View>
  );

const tamanioPrimeraFila = 100;

export default class agregarCaballoPage extends React.Component {
    static navigationOptions = {
        header: <CustomHeader title="MI PERFIL" subtitle="World" />
    }

    render() {
    return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Nombre</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Propietario</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Genero</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Pelaje</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Nacimiento</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Genealogia</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Criador</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>ADN (No)</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}># Chip</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}># ID</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Otras Marcas</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
                    <View style={{flexDirection: 'row', height: 50}}>
                        <Text style={{width: tamanioPrimeraFila, alignSelf:'center'}}>Adjuntos de otras marcas</Text>
                        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, flex:1, alignSelf:'center'}}></TextInput>
                    </View>
            </ScrollView>
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
