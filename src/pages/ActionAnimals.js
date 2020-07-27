import React, { useState } from 'react';

import { View, AsyncStorage, Image, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

import { Switch, Dialog, Appbar, RadioButton, Portal, Text, Button, Provider, TextInput } from 'react-native-paper';

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

    state = {
        checked1: 'sec',
        checked2: 'sed',
        checked3: 'ser',
        checked4: 'sad',
        checked5: 'sad',
        checked6: 'set',
        switchLed: true,
        switchSound: true,
        switchLedPost: true,
        switchSoundPost: true,

        ledNumber: 0,

        order: 0,

        led1dog: 1,
        led2pig: 2,
        led3cat: 3,
        led4snake: 4,
        led5bode: 5,
        led6frog: 6,

        error: false,
        erroTentativa: false,

        arrayActions: [],
        responseActions: [],

        comentario: '',

        visible: false,
        addComment: false,

    }



    navigationToInteration() {
        navigation.navigate('Login');
    }

    showModal() {
        this.setState({ visible: true });
        //this.state.visible = true;
    }

    hideModal() {
        this.setState({ visible: false });
    }

    async finally() {

        let responseAux = {};
        try {
            const response = await api.get(`finalizar`);
            console.log(response.data);
            responseAux = {
                bode: response.data.bode,
                cat: response.data.cat,
                dog: response.data.dog,
                frog: response.data.frong,
                pig: response.data.pig,
                snake: response.data.snake
            };

            if (this.state.order > 1) {
                let orderAux = this.state.order - 1;

                let toy = {
                    order: orderAux,
                    interations: responseAux
                }

                let aux = this.state.responseActions;
                aux.push(toy);
                this.setState({ responseActions: aux });

            }
        } catch (e) {
            console.log(e);
        }
        /*
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
                    .catch(error => this.setState({ error: true }), console.log('deu ruim'));
            */

        let reportinfo = this.state.arrayActions;
        let reporttoy = this.state.responseActions;
        let comento = this.state.comentario;

        let validationInfo = false;
        let validationToy = false;
        let validationCom = false;

        await AsyncStorage.setItem(`@teste@reportinfo`, JSON.stringify(reportinfo))
            .then(json => json)
            .catch(error => console.log(error), validationInfo = true);

        await AsyncStorage.setItem(`@teste@reporttoy`, JSON.stringify(reporttoy))
            .then(json => json)
            .catch(error => console.log(error), validationToy = true);

        await AsyncStorage.setItem(`@teste@reportcom`, JSON.stringify(comento))
            .then(json => json)
            .catch(error => console.log(error), validationCom = true);

        this.navigationToFinaly();
    }

    navigationToFinaly() {
        this.props.navigation.navigate('Finaly');
    }

    handleSubmit(number) {
        this.state.ledNumber = number;
    }

    handleComento = (text) => {
        this.setState({ comentario: text })
    }


    async handleSubmitStartInteration() {
        //dog led1 | pig led2 | cat led3 | snake led4 | bode led5 | frog led6on

        if (!this.state.ledNumber || this.state.ledNumber == 0) {
            console.log('o cara tentou ativar sem selecionar');
            return this.setState({ erroTentativa: true })
        }
        this.setState({ order: this.state.order + 1 })


        //this.setState({ ledNumber: number })
        let number = this.state.ledNumber;
        let responseAux = {};
        const response = await api.get(`/led${number}on`);

        let escolhido = '';
        switch (number) {
            case 1:
                escolhido = 'dog';
                break;
            case 2:
                escolhido = 'pig';
                break;
            case 3:
                escolhido = 'cat';
                break;
            case 4:
                escolhido = 'snake';
                break;
            case 5:
                escolhido = 'bode';
                break;
            case 6:
                escolhido = 'frog';
                break;
            default:
                console.log('default');
                break;
        }

        console.log('pegar response');
        if (response && this.state.order > 1) {
            console.log(response.data);
            //alert('live response');
            responseAux = {
                bode: response.data.bode,
                cat: response.data.cat,
                dog: response.data.dog,
                frog: response.data.frong,
                pig: response.data.pig,
                snake: response.data.snake
            };

            let orderAux = this.state.order - 1;

            let toy = {
                order: orderAux,
                interations: responseAux
            }

            let aux = this.state.responseActions;
            aux.push(toy);
            this.setState({ responseActions: aux });
        } else {
            console.log('sem response');
        }


        let arrayStatus = [
            this.state.switchLed,
            this.state.switchSound,
            this.state.switchLedPost,
            this.state.switchSoundPost
        ]

        let informations = {
            order: this.state.order,
            switch: arrayStatus,
            animal: escolhido
        }

        let aux = this.state.arrayActions;
        aux.push(informations);
        this.setState({ arrayActions: aux });
    }

    async handleSubmitStatus(valor) {
        console.log('testo');
        const response = await api.get(`${valor}`);
    }

    _goBack = () => console.log('Went back');

    _handleSearch = () => console.log('Searching');

    _handleMore = () => console.log('Shown more');


    render() {
        let coment = '';
        return (
            <Provider >
                <Portal >
                    <SafeAreaView style={style.container}>
                        <Appbar style={style.bottom}>
                            <Appbar.Header style={style.appHeader}>
                                <Appbar.BackAction
                                    onPress={() => this.props.navigation.navigate('Session')}
                                />
                                <Text style={style.title}>Nova Sessão de Paciente                                               </Text>
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
                                            onTouchStart={() => { this.handleSubmitStatus('led') }}
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
                                            onTouchStart={() => { this.handleSubmitStatus('sound') }}
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
                                        onPress={() => { this.handleSubmit(5), this.setState({ checked1: 'sad', checked2: 'not', checked3: 'not', checked4: 'not', checked5: 'first', checked6: 'not' }) }}
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
                                            onTouchStart={() => { this.handleSubmitStatus('ledPost') }}
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
                                            onTouchStart={() => { this.handleSubmitStatus('soundPost') }} />
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
                                onPress={() => this.setState({ visible: true })}
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

                        <Dialog visible={this.state.visible} onDismiss={() => this.setState({ visible: false })}>
                            <View>

                                {this.state.addComment ?

                                    <View>
                                        <TouchableOpacity style={{ height: 75 }}>
                                            <Text style={{ fontSize: 24 }}> Obsevação</Text>
                                        </TouchableOpacity>
                                        <TextInput
                                            onChangeText={this.handleComento}
                                            placeholder='Digite aqui'
                                            placeholderTextColor='#999'
                                            autoCorrect={true}
                                        />
                                        <Dialog.Actions>
                                            <Button icon="close" onPress={() => console.log('Cancel'), () => this.setState({ addComment: false })}></Button>
                                            <Button icon="check" onPress={() => this.finally()}></Button>
                                        </Dialog.Actions>
                                    </View>
                                    :
                                    <View>
                                        <TouchableOpacity style={{ height: 75, justifyContent: 'center' }} onPress={() => console.log('Ok'), () => this.setState({ addComment: true })}>
                                            <Text style={{ fontSize: 21 }}> Adicionar observação</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.finally()} style={{ height: 75, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 21 }}> Finalizar agora</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
                        </Dialog>
                    </SafeAreaView>
                </Portal>
            </Provider>

        )
    }
}
/**
<Modal style={{ backgroundColor: 'red' }} visible={this.state.visible} onDismiss={() => this.setState({ visible: false })}>
                            <View style={{ backgroundColor: 'red' }} >
                                <Text>Example Modal</Text>
                            </View>
                        </Modal>
 */
const style = StyleSheet.create({

    //                "C:\Program Files (x86)\Google\Chrome\Application" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

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
