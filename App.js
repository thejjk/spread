/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


/*
import React, {useState} from 'react';

import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

import { Switch, ToggleButton, Appbar} from 'react-native-paper';

import api from "./src/service/api";

//import logo from "../assets/logo.png";

import logo from "./src/assets/logo.png";
import cat from "./src/assets/cat.png";
import bode from "./src/assets/bode.png";
import jabba from "./src/assets/jabba.png";
import pig from "./src/assets/pig.png";
import snake from "./src/assets/snake.png";
import dog from "./src/assets/dog.png";

//expo build:android -t apk

export default class App extends React.Component {

    //const [ switchLed, setSwitchLed ] = useState(true);
    //const [ switchSound, setSwitchSound ] = useState(false); 

    
    //async function handleSubmit(ledId) {
    //    const response = await api.get(ledId);
    //    console.log(ledId);
   // }

    state = {
        switchLed: false,
        switchSound: false,
        switchLedPost: false,
        switchSoundPost: false,
    }

    async handleSubmit(endPoint) {
        console.log('testo', endPoint);
        const response = await api.get(`/${endPoint}`)  
    }

//dog led1
      async handleSubmit1() {
        console.log('testo');
        const response = await api.get('/led1on')  
      }
//pig led2
      async  handleSubmit2() {
        console.log('testo');
        const response = await api.get('/led2on')  
      }
//cat led3
      async handleSubmit3() {
        console.log('testo');
        const response = await api.get('/led3on')  
      }
//snake led4
      async handleSubmit4() {
        console.log('testo');
        const response = await api.get('/led4on')  
      }
//bode led5
      async handleSubmit5() {
        console.log('testo');
        const response = await api.get('/led5on')  
      }
//frog jabba led6on
      async handleSubmit6() {
        console.log('testo');
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
    
    render () {

        return (    
        <View style={style.container}>
            <Appbar style={style.bottom}>
                <Appbar.Action onPress={() => console.log('Pressed archive')} />
                <Appbar.Action onPress={() => console.log('Pressed label')}></Appbar.Action>
            </Appbar>   
            <View style={style.row}>
                <View style={style.collum}>
                    <Text>PRÉ-INTERAÇÃO</Text>
                    <View style={style.row}>
                        <Text>Led</Text>
                        <Switch 
                            value={this.state.switchLed}
                            onValueChange={switchLed => this.setState({switchLed})}
                            onTouchStart={ this.handleSubmitStatusLed}
                        />
                    </View>
                    <View style={style.row}>
                        <Text>Som</Text>
                        <Switch 
                            value={this.state.switchSound}
                            onValueChange={switchSound => this.setState({switchSound})}
                            onTouchStart={ this.handleSubmitStatusSound}
                        />
                    </View>
                </View>
                <View style={style.collum}>
                    <Text>PÓS-INTERAÇÃO</Text>
                    <View style={style.row}>
                        <Text>Led</Text>
                        <Switch 
                            value={this.state.switchLedPost}
                            onValueChange={switchLedPost => this.setState({switchLedPost})}
                            onTouchStart={ this.handleSubmitStatusLedPost}
                        />
                    </View>
                    <View style={style.row}>
                        <Text>Som</Text>
                        <Switch 
                            value={this.state.switchSoundPost}
                            onValueChange={switchSoundPost => this.setState({switchSoundPost})}
                            onTouchStart={ this.handleSubmitStatusSoundPost}
                        />
                    </View>
                </View>
            </View>

    <View style={style.mainForm}>
            <View style={style.form1}>    
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={this.handleSubmit1}
                >
                <Image
                style={style.avatar}
                source={dog}
                />
                </TouchableOpacity>

                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={this.handleSubmit3}
                >
                <Image
                style={style.avatar}
                source={cat}
                />
                </TouchableOpacity>

                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={this.handleSubmit5}
                >
                <Image
                style={style.avatar}
                source={bode}
                />
                </TouchableOpacity>
            </View>

            <View style={style.form2}>    
                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={this.handleSubmit2}
                >
                <Image
                style={style.avatar}
                source={pig}
                />
                </TouchableOpacity>

                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={this.handleSubmit4}
                >
                <Image
                style={style.avatar}
                source={snake}
                />
                </TouchableOpacity>

                <TouchableOpacity 
                style={style.buttonAnimals}
                onPress={this.handleSubmit6}
                >
                <Image
                style={style.avatar}
                source={jabba}
                />
                </TouchableOpacity>
            </View>

        </View>
        
    </View>
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

    collum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    form1: {
        alignSelf: "stretch",
        marginTop: 10 ,
    },

    form2: {
        alignSelf: "stretch",
        marginTop: 10 ,
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
        paddingTop: 10,
        marginBottom: 10 
    },

    buttonAnimals: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:50, 
        marginHorizontal: 30,
        marginBottom: 50,

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

    avatar: {
        height: 150,
        resizeMode: 'contain',
    },

    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -120,
        height: 80
        
    },

})




import React from 'react';
import Routes from './src/routes'
import { View } from 'react-native';


import { Switch, ToggleButton, Appbar} from 'react-native-paper';


export default function App() {
    return 
    <View>
        <Appbar style={style.bottom}>
            <Appbar.Action onPress={() => console.log('Pressed archive')} />
            <Appbar.Action onPress={() => console.log('Pressed label')}></Appbar.Action>
        </Appbar>
    <Routes />
    </View>  
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

    collum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    form1: {
        alignSelf: "stretch",
        marginTop: 10 ,
    },

    form2: {
        alignSelf: "stretch",
        marginTop: 10 ,
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
        paddingTop: 10,
        marginBottom: 10 
    },

    buttonAnimals: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:50, 
        marginHorizontal: 30,
        marginBottom: 50,

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

    avatar: {
        height: 150,
        resizeMode: 'contain',
    },

    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: -120,
        height: 80
        
    },

})
*/

import React from 'react';
import Routes from './src/routes'
import {SafeAreaView, View } from 'react-native';
/*
export default function App() {
    return 
    <View>
    <Routes />
    </View>  
}

const App = () => {
    return (
        <div>

        <View>
                <Routes />
        </View>  
         </div>
    );
}
ReactDOM.render(<App />, document.querySelector('#root'));

*/
export default function App() {
    return( 
    <Routes />  
)}