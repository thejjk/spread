import React from 'react';

import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';

import logo from "../assets/logo.png";

import personAdd from "../assets/person-add-outline.png";

import people from "../assets/people-outline.png";


export default function Patient( { navigation}) {


    function navigationToLogin() {
        navigation.navigate('Login');
    }

    function navigationToListPatient() {
        navigation.navigate('ListPatient');
    }

    function navigationToNewPatient() {
        navigation.navigate('NewPatient');
    }

    return (
    <SafeAreaView style={style.container}>

<Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                        <Appbar.BackAction
                        onPress={navigationToLogin}
                        />
                        <Text style={style.title}>Bem vindo, Usuário                                      </Text>
                    </Appbar.Header>
                </Appbar> 

        <Image style={style.logo} source={logo}/>

        <View style={style.formWithoutPadding}>
            <View style={style.viewSection}>
                <View>    
                    <TouchableOpacity onPress={navigationToNewPatient} style={style.buttonCircle}>
                        <View>
                            <Image style={style.logoAvatar} source={personAdd}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>    
                    <Text style={style.buttonTextCircle}>
                            Novo Paciente
                    </Text>
                </View>    
            </View>
            <View style={style.viewSection}>
                <View>
                    <TouchableOpacity onPress={navigationToListPatient} style={style.buttonCircle}>
                        <Image style={style.logoAvatar} source={people}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={style.buttonTextCircle}>
                        Pacientes
                    </Text>
                </View>
            </View>
        </View>
        <View style={style.form}>
            <TouchableOpacity onPress={navigationToLogin} style={style.button}>
                <Text style={style.buttonText}>
                    Sair
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },

    form: {
        alignSelf: "stretch",
        paddingHorizontal: 30,
    },

    formWithoutPadding: {
        alignSelf: "stretch",
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
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#0094d4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 100,
    },

    buttonCircle: {
        height: 100,
        width: 100,
        backgroundColor: '#0094d4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 40,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    }, 

    buttonTextCircle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    }, 

    viewSection: {
        backgroundColor: '#F0ECEC',
        marginBottom: 20,
        height: 108,
        flexDirection: 'row',
        alignItems: 'center',
    },

    logoAvatar: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
    },

    logo: {
        marginTop: -60,
        marginBottom: 30,
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

})