import React, { useState } from 'react';
import { SafeAreaView, Picker, View, KeyboardAvoidingView, Keyboard, Platform, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

//import getRealm from "../service/realm";
import people from "../assets/people-outline.png";

export default function NewPatient({ navigation }) {
    /*
    function constructor(props) {
        super(props)
    }
    */
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [diag, setDiag] = useState('');
    const [parentName, setParentName] = useState('');
    const [parentCall, setParentCall] = useState('');
    const [parentEmail, setParentEmail] = useState('');
    //const [birthday, setBirthday] = useState('');

    function navigationToPatient() {
        Alert.alert(
            'success!',
            'cadastro realizado',
            [
                { text: 'OK', onPress: () => navigation.navigate('Patient') },
            ],
        );

        setError('');
        setName('');
        setGenero('');
        setDiag('');
        setParentName('');
        setParentCall('');
        setParentEmail('');

    }

    function navigatePatient () {
        navigation.navigate('Patient')
    }

    async function handleSubmit() {

        if (
            !name
            || !genero
            || !diag
            || !parentName
            || !parentCall
            || !parentEmail
        ) {
            return setError(true);
        }
        const data = {
            db_name: name,
            db_genero: genero,
            db_diag: diag,
            db_parentName: parentName,
            db_parentCall: parentCall,
            db_parentEmail: parentEmail
        };

        let list = [];
        let sessionUser = {};
        await AsyncStorage.getItem(`@teste@sessionkey`)
            .then(req => JSON.parse(req))
            .then(json => [sessionUser = json, list =json.db_patient])
            .catch(error => console.log('error!'));
        

        sessionUser.db_patient.push(data);    
        //JSON.parse(sessionUser)
        console.log('sessionUser');
        console.log(sessionUser);

        
        console.log('list');
        console.log(list);

        console.log(list[0].db_diag);

        await AsyncStorage.setItem(`@teste@userkey${sessionUser.db_email}`, JSON.stringify(sessionUser))
        .then(json => console.log('sucesso'))
        .catch(error => setError(true));
        
        let sucesso = false;
        await AsyncStorage.setItem(`@teste@sessionkey`, JSON.stringify(sessionUser))
            .then(json => sucesso = true)
            .catch(error => setError(true));        
            
        if (sucesso) {
            navigationToPatient()
        }    
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
                        onPress={navigatePatient}
                    />
                    <Text style={style.title}>Cadastro de Paciente                                  </Text>
                </Appbar.Header>
            </Appbar>

            <View style={style.form}>
                <View style={style.view}>
                </View>
                <View>
                    <TextInput
                    value={name}
                    onChangeText={setName}
                        style={style.input}
                        placeholder='Nome completo'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />
                    <TextInput
                    value={diag}
                    onChangeText={setDiag}
                        style={style.input}
                        placeholder='Diagnóstivo'
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

                    <TextInput
                    value={parentName}
                    onChangeText={setParentName}
                        style={style.input}
                        placeholder='Nome do responsável'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />

                    <TextInput
                    value={parentEmail}
                    onChangeText={setParentEmail}
                        style={style.inputCrefito}
                        placeholder='Email do responsável'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />
                    <View style={style.view3}>
                        <TextInput
                        value={parentCall}
                        onChangeText={setParentCall}
                            style={style.inputDDD}
                            placeholder='DDD - Contato do resposável          '
                            placeholderTextColor='#999'
                            autoCorrect={false}
                        />
                    </View>
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

