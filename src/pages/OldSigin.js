import React, { useState } from 'react';
import {SafeAreaView, Picker, View, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button, Switch, ToggleButton, Appbar, RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';


import people from "../assets/people-outline.png";  

export default class OldSigin extends React.Component {
    constructor(props){
        super(props)
    }
    
    state = {
        male: 'sec',
        female: 'sed',
        other: 'ser',
        date: Date(1598051730000),
        mode: 'date',
        show: false,

        perfil: '',



    }


    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };
    
      showDatepicker = () => {
        showMode('date');
      };
    
      showTimepicker = () => {
        showMode('time');
      };

    navigationToLogin() {
        navigation.navigate('Login');
    }

    render () {
return (
<SafeAreaView style={style.container}>

            <Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                        <Appbar.BackAction
                        onPress={() => this.props.navigation.navigate('Login')}
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
                style={style.input}
                placeholder='Nome completo'
                placeholderTextColor='#999'
                autoCorrect={false}
            />
            <View>
                <Button onPress={() => this.showDatepicker} title="Show date picker!" />
            </View>
            {this.state.show && (
                <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={this.state.date}
                mode={this.state.mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}


            <View style={style.radioAction}>
                    <Text style={style.radioText}>
                        Gênero  
                    </Text>
                    <RadioButton
                    value="first"
                    status={this.state.female === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => {this.setState({ male: 'non', female: 'first', other: 'not'}); }}
                    />
                    <Text style={style.radioText}>
                        F
                    </Text>
                    <RadioButton
                    value="first"
                    status={this.state.male === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => {this.setState({ male: 'first', female: 'not', other: 'not'}); }}
                    />
                    <Text style={style.radioText}>
                        M
                    </Text>
                    <RadioButton
                    value="first"
                    status={this.state.other === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => {this.setState({ male: 'nec', female: 'not', other: 'first'}); }}
                    />
                    <Text style={style.radioText}>
                        Outros
                    </Text>
                </View>
            <View style={style.view2}>
                <View style={style.view3}>
                    <TextInput 
                        style={style.inputDDD}
                        placeholder='DDD'
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />
                    <TextInput 
                        style={style.inputContato}
                        placeholder='Contato          '
                        placeholderTextColor='#999'
                        autoCorrect={false}
                    />
                </View>
                <TextInput 
                    style={style.inputCrefito}
                    placeholder='CREFITO          '
                    placeholderTextColor='#999'
                    autoCorrect={false}
                />
            </View>

            <TextInput 
                style={style.input}
                placeholder='E-mail'
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCorrect={false}
            />
            <TextInput 
                style={style.input}
                placeholder='Senha'
                placeholderTextColor='#999'
                autoCorrect={false}
            />
            <TextInput 
                style={style.input}
                placeholder='Confirmar Senha'
                placeholderTextColor='#999'
                autoCorrect={false}
            />
        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={style.button}>
            <Text style={style.buttonText}>
                Finalizar
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
    marginRight:20,
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
})

