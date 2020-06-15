import React, { useState } from 'react';

import { View, AsyncStorage, Image, StyleSheet, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';

import { Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';

import moment from 'moment';


import api from '../service/api'

import cat from "../assets/cat.png";
import bode from "../assets/bode.png";
import jabba from "../assets/jabba.png";
import pig from "../assets/pig.png";
import snake from "../assets/snake.png";
import dog from "../assets/dog.png";
import lightbulb from "../assets/lightbulb-on-outline.png";
import bell from "../assets/bell-outline.png";

//expo build:android -t apk
export default class ActionAnimals extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Home',
    };

    //const [ switchLed, setSwitchLed ] = useState(true);
    //const [ switchSound, setSwitchSound ] = useState(false); 

    //async function handleSubmit(ledId) {
    //    const response = await api.get(ledId);
    //    console.log(ledId);
    //}

    state = {
        checked1: 'sec',
        checked2: 'sed',
        checked3: 'ser',
        checked4: 'sad',
        checked5: 'sad',
        checked6: 'set',
        switchLed: false,
        switchSound: false,
        switchLedPost: false,
        switchSoundPost: false,

        ledNumber: 0,

        /*
        led1dog: 1,
        led2pig: 1,
        led3cat: 1,
        led4snake: 1,
        led5bode: 1,
        led6frog: 1,
*/

        order: 1,
        
        led1dog: 1,
        led2pig: 2,
        led3cat: 3,
        led4snake: 4,
        led5bode: 5,
        led6frog: 6,

        error: false,
        erroTentativa: false,

        arrayActions: [],
    }

    navigationToInteration() {
        navigation.navigate('Login');
    }

    async finally() {

        let actions = this.state.arrayActions;
        let sessionPatient = {};
         
        await AsyncStorage.getItem(`@teste@sessionPatient`)
        .then(req => JSON.parse(req))
        .then(json => [sessionPatient = json, console.log('paciente da sessão', json)])
        .catch(error => console.log('error!'));


        var date = moment()
        .utcOffset('-03:00')
        .format('YYYY-MM-DD//hh:mm:ss//A');
        
        // PEGAR INFORMAÇÕES DO HARDWARE
        // SALVAR INFORMAÇÕES DO HARDWARE
        

        let report = {
            id: `${sessionPatient.db_name}#${date}`,
            actionsSoftware: actions,
            actionsHardware: [],
        }
        sessionPatient.db_reports = []
        sessionPatient.db_reports.push(report);

        await AsyncStorage.setItem(`@teste@sessionPatient`, JSON.stringify(sessionPatient))
        .then(json => this.navigationToReport())
        .catch(error => this.setState({error: true}), console.log('deu ruim'));
    }
    
    navigationToReport() {
        this.props.navigation.navigate('Finaly');
    }

    handleSubmit(number) {
        this.setState({ ledNumber: number })
        
    }

        
    async handleSubmitStartInteration() {
        //dog led1 | pig led2 | cat led3 | snake led4 | bode led5 | frog led6on
    
        if(!ledNumber || ledNumber == 0){
            console.log('o cara tentou ativar sem selecionar');
            return this.setState({ erroTentativa: true })
        }
        this.setState({ order: this.state.order + 1 })


        //this.setState({ ledNumber: number })
        let number = this.state.ledNumber;



        let arrayStatus = [
            this.state.switchLed,
            this.state.switchSound,
            this.state.switchLedPost,
            this.state.switchSoundPost
        ]

        let informations = {
            order: this.state.order, 
            switch: arrayStatus,
            animal: number
        }

        let aux = this.state.arrayActions;
        aux.push(informations);
        this.setState({ arrayActions: aux})
        
        //console.log('number :', this.state.arrayActions);
        //this.setState({ led1dog: this.state.led1dog + 1 })
        //console.log('led1dog :', this.state.led1dog);

        //console.log(`/led${number}on`);
        //console.log('informations number :', informations.animal);
        const response = await api.get(`/led${number}on`)
    }
    
    async handleSubmitStatus(valor) {
        console.log('testo');
        const response = await api.get(`${valor}`);
    }

    _goBack = () => console.log('Went back');

    _handleSearch = () => console.log('Searching');

    _handleMore = () => console.log('Shown more');


    render() {

        return (
            <SafeAreaView style={style.container}>
                <Appbar style={style.bottom}>
                    <Appbar.Header style={style.appHeader}>
                        <Appbar.BackAction
                            onPress={() => this.props.navigation.navigate('Session')}
                        />
                        <Text style={style.title}>Nova Sessão de Paciente                                  </Text>
                    </Appbar.Header>
                </Appbar>
                <View style={style.mainForm}>
                    <View style={style.form1}>
                        <View style={style.collum}>
                            <Text style={style.textAction}>TERAPEUTA</Text>
                            <View style={style.rowActionSwitch}>
                                <Image
                                    style={style.actionIcon}
                                    source={lightbulb}
                                />
                                <Switch
                                    value={this.state.switchLed}
                                    onValueChange={switchLed => this.setState({ switchLed })}
                                    onTouchStart={() => {this.handleSubmitStatus('led')}}
                                />
                            </View>
                            <View style={style.rowActionSwitch}>
                                <Image
                                    style={style.actionIcon}
                                    source={bell}
                                />
                                <Switch
                                    value={this.state.switchSound}
                                    onValueChange={switchSound => this.setState({ switchSound })}
                                    onTouchStart={() => { this.handleSubmitStatus('sound')}}
                                />
                            </View>
                        </View>

                        <View>
                            <View style={style.radioAction}>
                                <RadioButton
                                    value="first"
                                    status={this.state.checked1 === 'first' ? 'checked' : 'unchecked'}
                                />
                            </View>
                            <TouchableOpacity
                                style={style.buttonAnimals}
                                onPress={() => { this.handleSubmit(1), this.setState({ checked1: 'first', checked2: 'sad', checked3: 'sad', checked4: 'not', checked5: 'not', checked6: 'not' }); }}
                            >
                                <Image
                                    style={style.avatar}
                                    source={dog}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <View style={style.radioAction}>
                                <RadioButton
                                    value="first"
                                    status={this.state.checked3 === 'first' ? 'checked' : 'unchecked'}
                                />
                            </View>
                            <TouchableOpacity
                                style={style.buttonAnimals}
                                onPress={() => { this.handleSubmit(3), this.setState({ checked1: 'sad', checked2: 'sad', checked3: 'first', checked4: 'not', checked5: 'not', checked6: 'not' }); }}
                            >
                                <Image
                                    style={style.avatar}
                                    source={cat}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={style.radioAction}>
                                <RadioButton
                                    value="first"
                                    status={this.state.checked5 === 'first' ? 'checked' : 'unchecked'}
                                />
                            </View>
                            <TouchableOpacity
                                style={style.buttonAnimals}
                                onPress={() => { this.handleSubmit(5), this.setState({ checked1: 'sad', checked2: 'not', checked3: 'not', checked4: 'not', checked5: 'first', checked6: 'not' })}}
                            >
                                <Image
                                    style={style.avatar}
                                    source={bode}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={style.form2}>

                        <View style={style.collum}>
                            <Text style={style.textAction}>PACIENTE</Text>
                            <View style={style.rowActionSwitch}>
                                <Image
                                    style={style.actionIcon}
                                    source={lightbulb}
                                />
                                <Switch
                                    value={this.state.switchLedPost}
                                    onValueChange={switchLedPost => this.setState({ switchLedPost })}
                                    onTouchStart={() => {this.handleSubmitStatus('ledPost')}}
                                />
                            </View>
                            <View style={style.rowActionSwitch}>
                                <Image
                                    style={style.actionIcon}
                                    source={bell}
                                />
                                <Switch
                                    value={this.state.switchSoundPost}
                                    onValueChange={switchSoundPost => this.setState({ switchSoundPost })}
                                    onTouchStart={() => {this.handleSubmitStatus('soundPost')}} />
                            </View>
                        </View>

                        <View>
                            <View style={style.radioAction}>
                                <RadioButton
                                    value="first"
                                    status={this.state.checked4 === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked4: 'first' }); }}
                                />
                            </View>
                            <TouchableOpacity
                                style={style.buttonAnimals}
                                onPress={() => { this.handleSubmit(4), this.setState({ checked1: 'nor', checked2: 'not', checked3: 'not', checked4: 'first', checked5: 'not', checked6: 'not' }); }}
                            >
                                <Image
                                    style={style.avatar}
                                    source={snake}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={style.radioAction}>
                                <RadioButton
                                    value="first"
                                    status={this.state.checked2 === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked2: 'first' }); }}
                                />
                            </View>
                            <TouchableOpacity
                                style={style.buttonAnimals}
                                onPress={() => { this.handleSubmit(2), this.setState({ checked1: 'nor', checked2: 'first', checked3: 'not', checked4: 'not', checked5: 'not', checked6: 'not' }); }}
                            >
                                <Image
                                    style={style.avatar}
                                    source={pig}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>

                            <View style={style.radioAction}>
                                <RadioButton
                                    value="first"
                                    status={this.state.checked6 === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked6: 'first' }); }}
                                />
                            </View>
                            <TouchableOpacity
                                style={style.buttonAnimals}
                                onPress={() => { this.handleSubmit(6), this.setState({ checked1: 'sad', checked2: 'not', checked3: 'not', checked4: 'not', checked5: 'not', checked6: 'first' }); }}
                            >
                                <Image
                                    style={style.avatar}
                                    source={jabba}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={style.rowActionButtons}>
                    <TouchableOpacity style={style.buttonEnd}
                        onPress={() => this.finally()}
                    >
                        <Text style={style.buttonTextEnd}>
                            FINALIZAR
                    </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.buttonStart}
                        onPress={() => this.handleSubmitStartInteration()}
                    >
                        <Text style={style.buttonTextStart}>
                            INICIAR
                    </Text>
                    </TouchableOpacity>
                    
                </View>



            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
    },

    row: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
    },

    rowActionSwitch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        paddingVertical: 15
    },

    rowActionButtons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        //marginVertical: 15,
        //paddingTop: 30,
    },

    collum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 50,
    },

    form1: {
        alignSelf: "stretch",
        marginTop: 20,
    },

    form2: {
        alignSelf: "stretch",
        marginTop: 20,
    },

    mainForm: {
        flexDirection: "row",
        alignSelf: "stretch",
        //paddingHorizontal: 30,
        //marginTop: 10,
        justifyContent: 'center'
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
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

    buttonTextStart: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    avatar: {
        height: 120,
        resizeMode: 'contain',
    },

    buttonEnd: {
        height: 32,
        width: 130,
        backgroundColor: '#F00202',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        top: -16,
        marginRight: 29
    },

    buttonStart: {
        height: 35,
        width: 138,
        backgroundColor: '#4CAD06',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        top: -20,
        marginLeft: 31
    },

    buttonTextEnd: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17,
    },

    textAction: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    actionIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    radioAction: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },

    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -120,
        height: 80,
        backgroundColor: '#0094d4',
    },

    appHeader: {
        backgroundColor: '#0094d4',
    },

    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

})
