import React, { useEffect } from 'react';

import { View, AsyncStorage, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';

import play from "../assets/play-outline.png";
import account from "../assets/account-outline.png";
import fileDoc from "../assets/file-document-outline.png";

export default function Finaly({ navigation }) {
    useEffect(() => {
        //getInfo();
        //getToy();
    }, []);

    function navigationToSession() {
        navigation.navigate('Session');
    }

    async function getInfo() {
        try {
            await AsyncStorage.getItem(`@teste@reportinfo`)
                .then(req => JSON.parse(req))
                .then(json => [console.log('sucesso!!!'), formulations(json)])
                .catch(error => console.log(error));

        } catch (error) {
            alert(`Error ${error}, contact support`);
        }
    }

    async function getToy() {
        try {
            await AsyncStorage.getItem(`@teste@reporttoy`)
                .then(req => JSON.parse(req))
                .then(json => [console.log('sucesso!!!'), formulations(json)])
                .catch(error => console.log(error));

        } catch (error) {
            alert(`Error ${error}, contact support`);
        }
    }

    function formulations(form1) {
        console.log(form1);
    }

    function navigationToActionAnimals() {
        navigation.navigate('ActionAnimals');
    }

    function navigationToReport() {
        navigation.navigate('Report');
    }

    function getKey() {
        const result = AsyncStorage.getItem(`@teste@sessionActiveActions`)
            .then(req => JSON.parse(req))
            .then(json => console.log(json))
            .catch(error => console.log('error!'));
    }

    function alerta(json) {
        Alert.alert(
            'success!',
            'cadastro realizado',
            [
                { text: `${json}`, onPress: () => navigation.navigate('Patient') },
            ],
        );

    }


    return (
        <SafeAreaView style={style.container}>
            <Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                    <Appbar.BackAction
                        onPress={navigationToSession}
                    />
                    <Text style={style.title}>Paciente                                                                            </Text>
                </Appbar.Header>
            </Appbar>

            <View style={style.formWithoutPadding}>
                <View style={style.viewSection}>
                    <View>
                        <TouchableOpacity onPress={navigationToReport} style={style.buttonCircle}>
                            <View>
                                <Image style={style.logoAvatar} source={fileDoc} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.viewButton}>
                        <Text style={style.buttonTextCircle}>
                            Visualizar
                            Relatório
                        </Text>
                    </View>
                </View>
            </View>
            <View style={style.form2}>
                <TouchableOpacity onPress={navigationToSession} style={style.button}>
                    <Text style={style.buttonText}>
                        Voltar ao menu inicial
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
        marginTop: 10
    },

    form2: {
        alignSelf: "stretch",
        alignItems: 'center',
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
        width: 270,
        backgroundColor: '#0094d4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
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

    viewButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonTextCircle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
        width: 170,
        justifyContent: 'center'
    },
    buttonTextCircle2: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 33,
        width: 180,
        justifyContent: 'center'
    },


    formWithoutPadding: {
        alignSelf: "stretch",
        marginTop: -20,
        marginBottom: 20,
    },

    viewSection: {
        backgroundColor: '#F0ECEC',
        marginBottom: 20,
        height: 258,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoAvatar: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
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