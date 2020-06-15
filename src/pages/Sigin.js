import React, { useState } from 'react';
import { SafeAreaView, Picker, View, KeyboardAvoidingView, Keyboard, Platform, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';

//import getRealm from "../service/realm";
import people from "../assets/people-outline.png";

export default function Sigin({ navigation }) {

    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [crefito, setCrefito] = useState('');
    const [call, setCall] = useState('');
    const [perfil, setPerfil] = useState('');
    //const [birthday, setBirthday] = useState('');

    function navigationToLogin() {
        Alert.alert(
            'success!',
            'cadastro realizado',
            [
                { text: 'OK', onPress: () => navigation.navigate('Login') },
            ],

        );

        setError('');
        setName('');
        setGenero('');
        setEmail('');
        setPassword('');
        setCrefito('');
        setCall('');
        setPerfil('');

        //navigation.navigate('Login');
    }
    function navigateLogin() {
        navigation.navigate('Login');
    }

    function handleSubmit() {

        if (!email || !name || !genero || !password || !call || !crefito || !perfil) {
            return setError(true);
        }
        const data = {
            db_name: name,
            db_genero: genero,
            db_email: email,
            db_password: password,
            db_crefito: crefito,
            db_call: call,
            db_perfil: perfil,
            db_patient: [],
        };
        AsyncStorage.setItem(`@teste@userkey${email}`, JSON.stringify(data))
            .then(json => navigationToLogin())
            .catch(error => setError(true));
    }

    function getKeyValue() {
        const result = AsyncStorage.removeItem(`@teste@somekey${email}`)
            .then(json => console.log('success'))
            .catch(error => console.log('error!'));
    }

    function getKey() {
        const result = AsyncStorage.getItem(`@teste@somekey${email}`)
            .then(req => JSON.parse(req))
            .then(json => console.log(json))
            .catch(error => console.log('error!'));
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
                    Finalizar
                </Text>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={style.container}>

            <Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                    <Appbar.BackAction
                        onPress={navigateLogin}
                    />
                    <Text style={style.title}>Cadastro de Usuário                                  </Text>
                </Appbar.Header>
            </Appbar>

            <View style={style.form}>
                <View style={style.view}>
                </View>
                <View>
                    <View style={style.view1}>
                        <TouchableOpacity style={style.buttonCircle}>
                            <Text>
                                .
                            </Text>
                        </TouchableOpacity>
                        <TextInput
                            value={perfil}
                            onChangeText={setPerfil}
                            style={style.input}
                            placeholder='Perfil'
                            placeholderTextColor='#999'
                            autoCorrect={false}
                        />
                    </View>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={style.input}
                        placeholder='Nome completo'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />
                    <TextInput
                        value={genero}
                        onChangeText={setGenero}
                        style={style.input}
                        placeholder='Gênero'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />
                    <View style={style.view2}>
                        <View style={style.view3}>
                            <TextInput
                                value={call}
                                onChangeText={setCall}
                                style={style.inputDDD}
                                placeholder='DDD - Contato     '
                                placeholderTextColor='#999'
                                autoCorrect={false}
                            />
                        </View>
                        <TextInput
                            value={crefito}
                            onChangeText={setCrefito}
                            style={style.inputCrefito}
                            placeholder='CREFITO          '
                            placeholderTextColor='#999'
                            autoCorrect={false}
                        />
                    </View>

                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={style.input}
                        placeholder='E-mail'
                        placeholderTextColor='#999'
                        keyboardType='email-address'
                        autoCorrect={false}
                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={style.input}
                        placeholder='Senha'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>

                <Submit error={error}>
                </Submit>

                <Text style={style.errorText}>
                    {error == false ? '' : 'Existem campos não preenchidos'}
            </Text>

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

    buttonText: {
        color: '#FFF',
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

    logoAvatar: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
    },

    radioAction: {
        alignContent: "center",
        alignItems: 'baseline',
        flexDirection: 'row',
    },

    radioText: {
        fontSize: 16,
        color: '#444',
        fontWeight: 'bold',
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





