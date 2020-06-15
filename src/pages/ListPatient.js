import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Picker, View, KeyboardAvoidingView, Keyboard, Platform, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

//import getRealm from "../service/realm";
import people from "../assets/people-outline.png";

export default function NewPatient({ navigation }) {


    
function Item({ title, dado }) {
    return (
        <View style={style.item}>
            <Text onPress={() => navigateAction(dado)} style={style.itemText}>{title}</Text>
        </View>
    );
}

    const [list, setList] = useState('');
    const [favor, setFavor] = useState('');
    const [error, setError] = useState('');


    useEffect(
        () => {
            handleSubmit()
        }, [favor]
    )
    
    function navigatePatient() {
        navigation.navigate('Patient')
    }

    async function navigateAction(dado) {
        await AsyncStorage.setItem(`@teste@sessionPatient`, JSON.stringify(dado))
        .then(json => navigation.navigate('ActionAnimals'))
        .catch(error => setError(true));
    }

    async function handleSubmit() {

        let lista = [];
        let sessionUser = {};
        await AsyncStorage.getItem(`@teste@sessionkey`)
            .then(req => JSON.parse(req))
            .then(json => [sessionUser = json, lista = json.db_patient])
            .catch(error => console.log('error!'));

        console.log('lista');
        console.log(lista);

        setList(lista);
    }

    return (
        <SafeAreaView style={style.container}>

            <Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                    <Appbar.BackAction
                        onPress={navigatePatient}
                    />
                    <Text style={style.title}>Lista de Paciente                                  </Text>
                </Appbar.Header>
            </Appbar>

            <View style={style.form}>
                <View style={style.view}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => 
                    <Item
                        title={item.db_name }
                        dado={item}
                    />}
                    
                />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },

    form: {
        flex: 1,
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop: 10
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
    },

    button: {
        height: 42,
        backgroundColor: '#0094d4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 30,
        marginTop: 15
    },

    title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },

    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },

    viewBar: {
        backgroundColor: '#0094d4',
        alignItems: 'center',
    },


    avatar: {
        height: 45,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 10,
    },

    selector: {
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
        color: '#444',
        height: 44,
        borderRadius: 2
    },

    textBar: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    buttonCircle: {
        height: 100,
        width: 100,
        backgroundColor: '#c9c9c9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 20,
    },

    itemText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    view1: {
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -30,
    },

    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    view3: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputDDD: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        marginRight: 20,
        borderRadius: 2
    },
    inputContato: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    inputCrefito: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    bottom: {
        backgroundColor: '#0094d4',
        position: 'absolute',
        left: 0,
        right: 0,
        top: -120,
        height: 80
    },

    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    appHeader: {
        backgroundColor: '#0094d4',
    },

    errorText: {
        color: '#ff0000',
        fontStyle: 'normal',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
})

