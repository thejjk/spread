import React, {useState} from 'react';

import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text,SafeAreaView } from 'react-native';

import { Switch, ToggleButton, Appbar, RadioButton} from 'react-native-paper';

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
export default class ActionAnimals extends React.Component{
    constructor(props){
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

        led1dog: 0,
        led2pig: 0,
        led3cat: 0,
        led4snake: 0,
        led5bode: 0,
        led6frog: 0,
    }

    navigationToInteration() {
        navigation.navigate('Login');
    }

    async handleSubmit(endPoint) {
        console.log('testo', endPoint);
        const response = await api.get(`/${endPoint}`)  
    }

//dog led1
      async handleSubmit1() {
        led1dog: 1+led1dog;
        console.log('led1dog :',led1dog);
        const response = await api.get('/led1on')  
      }
//pig led2
      async  handleSubmit2() {
        led2pig: 1+led2pig;   
        console.log('led2pig :', led2pig);
        const response = await api.get('/led2on')  
      }
//cat led3
      async handleSubmit3() {
        led3cat: 1+led3cat;  
        console.log('led3cat :', led3cat);
        const response = await api.get('/led3on')  
      }
//snake led4
      async handleSubmit4() {
        led4snake: 1+led4snake;  
        console.log('led4snake :', led4snake);
        const response = await api.get('/led4on')  
      }
//bode led5
      async handleSubmit5() {
        led5bode: 1+led5bode;  
        console.log('led5bode :', led5bode);
        const response = await api.get('/led5on')  
      }
//frog jabba led6on
      async handleSubmit6() {
        led6frog: 1+led6frog  
        console.log('led6frog :', led6frog);
        const response = await api.get('/led6on')  
      }

      async handleSubmitStatusLed() {
        console.log('testo');
        const response = await api.get('/led'); 
      }

      async handleSubmitStatusSound() {
        const response = await api.get('/sound');
      }

      async handleSubmitStatusLedPost() {
        console.log('testo');
        const response = await api.get('/ledPost'); 
      }

      async handleSubmitStatusSoundPost() {
        const response = await api.get('/soundPost');
      }

      async finally() {
        const testRelators = {
            action_led1dog: led1dog,
            action_led2pig: led2pig,
            action_led3cat: led3cat,
            action_led4snake: led4snake,
            action_led5bode: led5bode,
            action_led6frog: led6frog,
        }  
        this.props.navigation.navigate('Finaly');
      }

      _goBack = () => console.log('Went back');

      _handleSearch = () => console.log('Searching');
    
      _handleMore = () => console.log('Shown more');
    

    render () {

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
            <View style={style.row}>
                <View style={style.collum}>
                    <Text style={style.textAction}>TERAPEUTA</Text>
                    <View style={style.row}>
                        <Image 
                            style={style.actionIcon}
                            source={lightbulb}
                        />
                        <Switch 
                            value={this.state.switchLed}
                            onValueChange={switchLed => this.setState({switchLed})}
                            onTouchStart={ this.handleSubmitStatusLed}
                        />
                    </View>
                    <View style={style.row}>
                        <Image 
                            style={style.actionIcon}
                            source={bell}
                        />
                        <Switch 
                            value={this.state.switchSound}
                            onValueChange={switchSound => this.setState({switchSound})}
                            onTouchStart={ this.handleSubmitStatusSound}
                        />
                    </View>
                </View>
                <View style={style.collum}>
                    <Text style={style.textAction}>PACIENTE</Text>
                    <View style={style.row}>
                        <Image 
                            style={style.actionIcon}
                            source={lightbulb}
                        />
                        <Switch 
                            value={this.state.switchLedPost}
                            onValueChange={switchLedPost => this.setState({switchLedPost})}
                            onTouchStart={ this.handleSubmitStatusLedPost}
                        />
                    </View>
                    <View style={style.row}>
                        <Image 
                            style={style.actionIcon}
                            source={bell}
                        />
                        <Switch 
                            value={this.state.switchSoundPost}
                            onValueChange={switchSoundPost => this.setState({switchSoundPost})}
                            onTouchStart={ this.handleSubmitStatusSoundPost}                       />
                    </View>
                </View>
            </View>

    <View style={style.mainForm}>
            <View style={style.form1}>    
                <View style={style.radioAction}>
                    <RadioButton
                        value="first"
                        status={this.state.checked1 === 'first' ? 'checked' : 'unchecked'}
                        />
                </View>
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={() => {this.handleSubmit1, this.setState({ checked1: 'first', checked2: 'not', checked3: 'not', checked4: 'not', checked5: 'not',checked6: 'not'}); }}
                >
                    <Image
                    style={style.avatar}
                    source={dog}
                    />
                </TouchableOpacity>
                <View style={style.radioAction}>
                    <RadioButton
                        value="first"
                        status={this.state.checked3 === 'first' ? 'checked' : 'unchecked'}                       
                        />
                </View>
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={() => {this.handleSubmit3, this.setState({ checked1: 'sad', checked2: 'sad', checked3: 'first', checked4: 'not', checked5: 'not',checked6: 'not'}); }}
                >
                    <Image
                    style={style.avatar}
                    source={cat}
                    />
                </TouchableOpacity>
                <View style={style.radioAction}>
                    <RadioButton
                        value="first"
                        status={this.state.checked5 === 'first' ? 'checked' : 'unchecked'}
                        />
                </View>
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={() => {this.handleSubmit5, this.setState({ checked1: 'sad', checked2: 'not', checked3: 'not', checked4: 'not', checked5: 'first',checked6: 'not'}); }}
                >
                    <Image
                    style={style.avatar}
                    source={bode}
                    />
                </TouchableOpacity>
            </View>

            <View style={style.form2}>    
                <View style={style.radioAction}>
                    <RadioButton
                        value="first"
                        status={this.state.checked4 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked4: 'first' }); }}
                    />
                </View>
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={() => {this.handleSubmit4, this.setState({ checked1: 'nor', checked2: 'not', checked3: 'not', checked4: 'first', checked5: 'not',checked6: 'not'}); }}
                >
                    <Image
                    style={style.avatar}
                    source={snake}
                    />
                </TouchableOpacity>
                <View style={style.radioAction}>
                    <RadioButton
                        value="first"
                        status={this.state.checked2 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked2: 'first' }); }}
                    />
                </View>
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={() => {this.handleSubmit2, this.setState({ checked1: 'sad', checked2: 'first', checked3: 'not', checked4: 'not', checked5: 'not',checked6: 'not'}); }}
                >
                    <Image
                    style={style.avatar}
                    source={pig}
                    />
                </TouchableOpacity>
                <View style={style.radioAction}>
                    <RadioButton
                        value="first"
                        status={this.state.checked6 === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked6: 'first' }); }}
                    />
                </View>
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={() => {this.handleSubmit6, this.setState({ checked1: 'sad', checked2: 'not', checked3: 'not', checked4: 'not', checked5: 'not',checked6: 'first'}); }}
                >
                    <Image
                    style={style.avatar}
                    source={jabba}
                    />
                </TouchableOpacity>
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
                <TouchableOpacity style={style.buttonStart}>
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
        marginVertical: 15
    },

    rowActionButtons: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 15,
        paddingTop: 30,
    },

    collum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    form1: {
        alignSelf: "stretch",
        marginTop: 20 ,
    },

    form2: {
        alignSelf: "stretch",
        marginTop: 20 ,
    },
    
    mainForm: {
        flexDirection: "row",
        alignSelf: "stretch",
        paddingHorizontal: 20,
        marginTop: 10 ,
        justifyContent: "space-between"
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
        paddingBottom: 10,
        paddingTop: 5,
        marginBottom: 1 
    },

    buttonAnimals: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius: 50, 
        marginHorizontal: 43,
        paddingBottom: 50,
        paddingTop: 30,

    },

    buttonTextStart: {
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

    avatar: {
        height: 120,
        resizeMode: 'contain',
    },



    buttonEnd: {
        height: 30,
        width: 130,
        backgroundColor: '#F00202',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        top: -20,
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
        borderWidth:1,
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        width:20,
        height:20,
        backgroundColor:'#fff',
        borderRadius:50, 
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
