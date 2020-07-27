import React, { useState } from 'react';

import { AsyncStorage, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import logo from "../assets/logo.png";

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [aprovado, setAprovado] = useState('');
    const [result, setResult] = useState('');

    /*
    async function getAllKeys() {
        console.log("Pegando as chaves");

        try {
         //   const keys = await AsyncStorage.getAllKeys();
         //   setListKeys(keys);
         //   console.log("Keys", listKeys);
            
        } catch (error) {
            console.log('Error get all app data.');
            alert('Error get all app data.');
        }
    }

       // const [listkeys, setListKeys] = useState('');
    
   // const [favor, setFavor] = useEffect('');
/*
    useEffect(
        () => {
            getAllKeys()
        }, [favor]
    )
*/
    function navigationToReport() {
        navigation.navigate('Report');
    }

    function navigationToSigin() {
        navigation.navigate('Sigin');
    }

    function navigationToActionAnimals() {
        navigation.navigate('ActionAnimals');
        //navigation.navigate('Report');
    }

    async function cleanAll() {

        console.log("Resetando");

        try {
            const keys = await AsyncStorage.getAllKeys();
            console.log("Keys", keys);
            await AsyncStorage.multiRemove(keys);
        } catch (error) {
            console.log('Error clearing app data.');
            alert(`Error clearing app data. ${error}`);
        }

        setError(3);
        /*
                await AsyncStorage.setItem('@teste@sessionkey', JSON.stringify(data))
                    .then(json => [console.log(json), navigation.navigate('Patient')])
                    .catch(error => setError(true));
        */
    }

    async function navigationToPatient(data) {

        console.log(data);

        let resposta = '';
        await AsyncStorage.setItem('@teste@sessionkey', JSON.stringify(data))
            .then(json => resposta = json)
            .catch(error => setError(0));

        /*if(resposta) {
            console.log('entrei no if');
        } else {
            console.log('entrei no else');
            setError(0)
        }*/

        navigation.navigate('Patient');
    }

    async function handleSubmit() {

        if (!email || !password) {
            return setError(1);
        }

        try {
            await AsyncStorage.getItem(`@teste@userkey${email}`)
                .then(req => JSON.parse(req))
                .then(json => [console.log('sucesso!!!'), navigationToPatient(json)])
                .catch(error => setError(2));
        } catch (error) {
            alert(`Error ${error}, contact support`);
        }

    }

    function Submit({ error }) {
        return (
            <TouchableOpacity
                onPress={handleSubmit}
                style={[
                    style.button,
                    { backgroundColor: error ? '#0094d4' : '#0094d4' },
                ]}
            >
                <Text style={style.buttonText}>
                    Entrar
                </Text>
            </TouchableOpacity>
        )
    }

    const RightActions = () => {
        return (
            <View>
                <Text style={style.link} onPress={navigationToReport}>
                    Report
            </Text>
            </View>
        )
    };

    const LeftActions = () => {
        return (
            <View>
                <Text style={style.link} onPress={navigationToActionAnimals}>
                    Interação
            </Text>
            </View>
        )
    };

    return (
        <SafeAreaView style={style.container}>
            <Image source={logo} />

            <View style={style.form}>
                <View>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={style.input}
                        placeholder='E-mail'
                        placeholderTextColor='#999'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                <View>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={style.input}
                        placeholder='Senha'
                        placeholderTextColor='#999'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>

                <Submit error={error}>
                </Submit>

                <Text style={style.errorText}>
                    {error == 0 ? '' : (error == 1 ? 'Email ou senha não preenchido' : (error == 2 ? 'Email ou senha inválido' : ''))}
                </Text>
                <Swipeable
                    renderLeftActions={LeftActions}
                    renderRightActions={RightActions}>
                    <Text style={style.link} onPress={navigationToSigin}>
                        Cadastre-se agora
            </Text>
                </Swipeable>

            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop: 30
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

    errorText: {
        color: '#ff0000',
        fontStyle: 'normal',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },

})