import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Button, Switch, ToggleButton, Appbar } from 'react-native-paper';

import cat from "../assets/cat.png";
import bode from "../assets/bode.png";
import jabba from "../assets/jabba.png";
import pig from "../assets/pig.png";
import snake from "../assets/snake.png";
import dog from "../assets/dog.png";

export default function Report({ navigation }) {

    
    const [list, setList] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');


    function navigationToSession() {
        navigation.navigate('Session');
    }

    let aux = {
        cachorro: 12,
        gato: 9,
        porco: 3
    }

    setResult(aux);

    /* 
    <View style={style.form1}>
                    <View>
                        <View style={style.radioAction}>
                            
                        </View>
                        <TouchableOpacity
                            style={style.buttonAnimals}
                            onPress={() => { this.handleSubmit(1)}}
                            >
                            <Image
                                style={style.avatar}
                                source={dog}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={style.radioAction}>
                            
                        </View>
                        <TouchableOpacity
                            style={style.buttonAnimals}
                            onPress={() => { this.handleSubmit(1)}}
                        >
                            <Image
                                style={style.avatar}
                                source={cat}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={style.radioAction}>
                           
                        </View>
                        <TouchableOpacity
                            style={style.buttonAnimals}
                            onPress={() => { this.handleSubmit(1)}}
                        >
                            <Image
                                style={style.avatar}
                                source={bode}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.form2}>
                    <View>
                        <View style={style.radioAction}>
                            
                        </View>
                        <TouchableOpacity
                            style={style.buttonAnimals}
                            onPress={() => { this.handleSubmit(1)}}
                        >
                            <Image
                                style={style.avatar}
                                source={snake}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={style.radioAction}>
                            
                        </View>
                        <TouchableOpacity
                            style={style.buttonAnimals}
                            onPress={() => { this.handleSubmit(1)}}
                        >
                            <Image
                                style={style.avatar}
                                source={pig}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>

                        <View style={style.radioAction}>
                            
                        </View>
                        <TouchableOpacity
                            style={style.buttonAnimals}
                            onPress={() => { this.handleSubmit(1)}}
                        >
                            <Image
                                style={style.avatar}
                                source={jabba}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

    */

   function Item({ title, dado }) {
    return (
        <View >
            <Text style={style.itemText}>{title}</Text>
        </View>
    );
}

    return (
        <SafeAreaView style={style.container}>
            <Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                    <Appbar.BackAction
                        onPress={navigationToSession}
                    />
                    <Text style={style.title}>Relatórios do Paciente                                     </Text>
                </Appbar.Header>
            </Appbar>
            <View style={style.form}>
                <View>
                    <Item 
                    title={"cachorro"}
                    dado={aux.cachorro}
                    />
                    <Item 
                    title={"gato"}
                    dado={aux.gato}
                    />
                    <Item 
                    title={"porco"}
                    dado={aux.porco}
                    />
                </View>
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

    buttonAnimals: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginHorizontal: 30,
        paddingBottom: 30,
        paddingTop: 30,
        //marginVertical: 30,
    },

    form1: {
        alignSelf: "stretch",
        marginTop: 20,
    },

    form2: {
        alignSelf: "stretch",
        marginTop: 20,
    },

    avatar: {
        height: 120,
        resizeMode: 'contain',
    },

    radioAction: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
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

    
    itemText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

})