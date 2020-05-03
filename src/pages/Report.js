import React from 'react';
import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';


export default function Report({ navigation}) {

    function navigationToSession() {
        navigation.navigate('Session');
    }


    return (
    <SafeAreaView style={style.container}>
        <Appbar style={style.bottom}>
                    <Appbar.Header style={style.appHeader}>
                        <Appbar.BackAction
                        onPress={navigationToSession}
                        />
                          <Text style={style.title}>Relatórios do Paciente                                  </Text>
                    </Appbar.Header>
                </Appbar>  
        <View style={style.form}>
            <View>
                <TouchableOpacity onPress={navigationToSession} style={style.button}>
                    <Text style={style.buttonText}>
                        Relatório (Go to Session)
                    </Text>
                </TouchableOpacity>
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
        marginHorizontal: 30,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    }, 

    link: {
        color: '#0094d4',
        fontWeight: "bold",
        fontStyle: 'normal',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column',
        textAlign: 'center',
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