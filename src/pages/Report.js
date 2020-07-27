import React, { useEffect, useState } from 'react';
import { View, AsyncStorage, Image, StyleSheet, Dimensions, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { DataTable, Appbar } from 'react-native-paper';
//import { GestureHandler } from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';
//const { Swipeable } = GestureHandler;

import cat from "../assets/cat.png";
import bode from "../assets/bode.png";
import jabba from "../assets/jabba.png";
import pig from "../assets/pig.png";
import snake from "../assets/snake.png";
import dog from "../assets/dog.png";

import lightbulb from "../assets/lightbulb-on-outline.png";
import bell from "../assets/bell-outline.png";
import power from "../assets/power.png";

import power_on from "../assets/power_on.png";

let hard = [
    { interations: { dog: 0, cat: 0, frog: 0, snake: 1, bode: 0, pig: 0 } },
    { interations: { dog: 0, cat: 0, frog: 0, snake: 0, bode: 0, pig: 1 } },
    { interations: { dog: 0, cat: 2, frog: 0, snake: 0, bode: 0, pig: 0 } },
    { interations: { dog: 0, cat: 0, frog: 1, snake: 0, bode: 0, pig: 0 } }];

let app = [
    { order: 1, switch: [1, 1, 1, 1], animal: 'snake' },
    { order: 2, switch: [1, 0, 1, 1], animal: 'frog' },
    { order: 3, switch: [1, 1, 1, 1], animal: 'cat' },
    { order: 4, switch: [1, 1, 0, 1], animal: 'pig' }];

export default function Report({ navigation }) {

    const [list, setList] = useState([]);

    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [favor, setFavor] = useState('');

    const [vision, setVision] = useState(true);
    //const [toy, setToy] = useState('');

    useEffect(() => {
        dataImpulse();
        detalhamento();
    }, [favor]
    );

    async function switchVision() {
        await detalhamento();
        setVision(!vision);
    }

    function navigationToFinaly() {
        navigation.navigate('Finaly');
    }

    function navigationToSession() {
        navigation.navigate('Session');
    }

    async function getInfo() {
        try {
            await AsyncStorage.getItem(`@teste@reportinfo`)
                .then(req => JSON.parse(req))
                .then(json => [console.log('sucesso!!!'), formulationsInfo(json)])
                .catch(error => console.log(error));

        } catch (error) {
            alert(`Error ${error}, contact support`);
        }
    }

    async function getToy() {
        try {
            await AsyncStorage.getItem(`@teste@reporttoy`)
                .then(req => JSON.parse(req))
                .then(json => [console.log('sucesso!!!'), formulationsToy(json)])
                .catch(error => console.log(error));

        } catch (error) {
            alert(`Error ${error}, contact support`);
        }
    }

    async function getComment() {
        try {
            await AsyncStorage.getItem(`@teste@reportcom`)
                .then(req => JSON.parse(req))
                .then(json => [console.log('sucesso!!!'), formulationsCom(json)])
                .catch(error => console.log(error));

        } catch (error) {
            alert(`Error ${error}, contact support`);
        }
    }

    let toy = {};
    let info = {};

    let coment = '';
    let aux = {
        bode: { c: 0, e: 0, r: 0 },
        cat: { c: 1, e: 0, r: 1 },
        dog: { c: 0, e: 0, r: 0 },
        frog: { c: 0, e: 1, r: 0 },
        pig: { c: 0, e: 1, r: 0 },
        snake: { c: 1, e: 0, r: 0 }
    };

    function formulationsInfo(form1) {
        console.log(form1);
        info = form1;
    }

    function formulationsToy(form1) {
        toy = form1;
    }

    function formulationsCom(form1) {
        coment = form1;
    }
    async function detalhamento() {

        //mock: comentar
        //app = info;
        //hard = toy;

        for (let i = 0; i < app.length; i++) {
            if (hard[i].interations[app[i].animal] > 0) {
                app[i].final = app[i].animal;
                switch (app[i].animal) {
                    case 'dog':
                        app[i].final = 'Cachorro';
                        break;
                    case 'pig':
                        app[i].final = 'Porco';
                        break;
                    case 'cat':
                        app[i].final = 'Gato';
                        break;
                    case 'snake':
                        app[i].final = 'Cobra';
                        break;
                    case 'bode':
                        app[i].final = 'Cabra';
                        break;
                    case 'frog':
                        app[i].final = 'Sapo';
                        break;
                    default:
                        app[i].final = '-';
                        break;
                }
            } else {
                if (hard[i].interations['dog'] > 0) {
                    app[i].final = 'Cachorro';
                } else if (hard[i].interations['cat'] > 0) {
                    app[i].final = 'Gato';
                } else if (hard[i].interations['frog'] > 0) {
                    app[i].final = 'Sapo';
                } else if (hard[i].interations['snake'] > 0) {
                    app[i].final = 'Cobra';
                } else if (hard[i].interations['pig'] > 0) {
                    app[i].final = 'Porco';
                } else if (hard[i].interations['bode'] > 0) {
                    app[i].final = 'Cabra';
                } else {
                    app[i].final = '-';
                }
            }
        }

        console.log('passei do for');

        app.forEach(function (element) {
            let escolhido;
            switch (element.animal) {
                case 'dog':
                    escolhido = 'Cachorro';
                    break;
                case 'pig':
                    escolhido = 'Porco';
                    break;
                case 'cat':
                    escolhido = 'Gato';
                    break;
                case 'snake':
                    escolhido = 'Cobra';
                    break;
                case 'bode':
                    escolhido = 'Cabra';
                    break;
                case 'frog':
                    escolhido = 'Sapo';
                    break;
                default:
                    escolhido = '-';
                    break;
            }
            element.tradutor = escolhido;
        });

        console.log('passei do forethc');
        console.log(app);
        setList(app);
    }

    async function dataImpulse() {
        await getInfo();
        await getToy();
        //         await getComment();

        console.log(info);
        console.log(toy);

        let animal = '';
        for (let i = 0; i < info.length; i++) {
            animal = info[i].animal;
            console.log(toy[i].interations[animal])
            if (toy[i].interations[animal] > 0) {
                aux[animal].c = aux[animal].c + 1;
                console.log(aux[animal].c);
                aux[animal].r += toy[i].interations[animal];
                console.log(aux[animal].r, toy[i].interations[animal]);
            } else {
                aux[animal].e = aux[animal].e + 1;
            }
        }
        console.log(aux);
        //await detalhamento();
    }

    function Item({ imagem, title, dadoC, dadoR, dadoE }) {
        return (
            <View style={{ flexDirection: 'row' }} >
                <View>
                    <TouchableOpacity
                        style={style.buttonAnimals}
                        onPress={() => { this.handleSubmit(1) }}
                    >
                        <Image
                            style={style.avatar}
                            source={imagem == 'dog' ? dog : imagem == 'cat' ? cat : imagem == 'frog' ? jabba : imagem == 'bode' ? bode : imagem == 'snake' ? snake : imagem == 'pig' ? pig : pig}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginVertical: 5 }}>
                    <View style={style.circlesC}>
                        <Text style={style.circlesText}>{dadoC}</Text>
                    </View>
                    <View style={style.circlesR}>
                        <Text style={style.circlesText}>{dadoR}</Text>
                    </View>
                    <View style={style.circlesE}>
                        <Text style={style.circlesText}>{dadoE}</Text>
                    </View>
                </View>
            </View>
        );
    }

    function Detalhado() {
        return (
            <View style={style.viewDetalhado}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title> </DataTable.Title>
                        <DataTable.Title> </DataTable.Title>
                        <DataTable.Title style={{ left: 5 }}> Terapeuta </DataTable.Title>
                        <DataTable.Title> </DataTable.Title>
                        <DataTable.Title style={{ left: 10 }}> Paciente</DataTable.Title>
                        <DataTable.Title> </DataTable.Title>
                        <DataTable.Title> </DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Header>
                        <DataTable.Title style={{}}>Teste</DataTable.Title>
                        <DataTable.Title style={{ right: 5 }}>Animal</DataTable.Title>
                        <DataTable.Title>
                            <Image
                                style={style.actionIcon}
                                source={lightbulb}
                            />
                        </DataTable.Title>
                        <DataTable.Title><Image
                            style={style.actionIcon}
                            source={bell}
                        /></DataTable.Title>
                        <DataTable.Title><Image
                            style={style.actionIcon}
                            source={lightbulb}
                        /></DataTable.Title>
                        <DataTable.Title><Image
                            style={style.actionIcon}
                            source={bell}
                        /></DataTable.Title>
                        <DataTable.Title>Resultado</DataTable.Title>
                    </DataTable.Header>
                    {
                        list.map(ap => {
                            return (
                                <DataTable.Row
                                    key={ap.order} // you need a unique key per item
                                >
                                    <DataTable.Cell style={{}}>
                                        {ap.order}
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{ right: 15 }}>
                                        {ap.tradutor}
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <Image
                                            style={style.actionIconPower}
                                            source={ap.switch[0] == 0 ? power : power_on}
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Image
                                            style={style.actionIconPower}
                                            source={ap.switch[1] == 0 ? power : power_on}
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Image
                                            style={style.actionIconPower}
                                            source={ap.switch[2] == 0 ? power : power_on}
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <Image
                                            style={style.actionIconPower}
                                            source={ap.switch[3] == 0 ? power : power_on}
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Text style={ap.final == ap.tradutor ? { color: 'rgb(140, 213, 140)' } : { color: 'red' }}>{ap.final}</Text>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            )
                        })}
                </DataTable>

                <View style={{ paddingTop: 30, alignItems: 'center', width: Dimensions.get('window').width }}>
                    <TouchableOpacity onPress={navigationToSession} style={style.button}>
                        <Text style={style.buttonText}>
                            Finalizar
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const LeftActions = () => {
        return (
            <View style={{ width: 40 }}>

            </View>
        )
    };




    function Geral() {
        return (
            <Swipeable
                renderLeftActions={LeftActions}
                onSwipeableWillOpen={switchVision}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginVertical: '10%' }}>
                        <Item
                            title={"cachorro"}
                            imagem={"dog"}
                            dadoC={aux.dog.c}
                            dadoR={aux.dog.r}
                            dadoE={aux.dog.e}
                        />
                        <Item
                            title={"cobra"}
                            imagem={"snake"}
                            dadoC={aux.snake.c}
                            dadoR={aux.snake.r}
                            dadoE={aux.snake.e}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: '10%' }}>
                        <Item
                            title={"gato"}
                            imagem={"cat"}
                            dadoC={aux.cat.c}
                            dadoR={aux.cat.r}
                            dadoE={aux.cat.e}
                        />
                        <Item
                            title={"porco"}
                            imagem={"pig"}
                            dadoC={aux.pig.c}
                            dadoR={aux.pig.r}
                            dadoE={aux.pig.e}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: '10%' }}>

                        <Item
                            title={"cabra"}
                            imagem={"bode"}
                            dadoC={aux.bode.c}
                            dadoR={aux.bode.r}
                            dadoE={aux.bode.e}
                        />
                        <Item
                            title={"sapo"}
                            imagem={"frog"}
                            dadoC={aux.frog.c}
                            dadoR={aux.frog.r}
                            dadoE={aux.frog.e}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12, paddingHorizontal: 13, justifyContent: 'space-between', width: Dimensions.get('window').width, height: 40 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={style.circlesClegenda}>
                        </View>
                        <View style={{ marginLeft: 7}}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }}>Quantidade</Text>
                            <Text style={{ textAlign: 'center', fontSize: 15 }}>de acertos</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={style.circlesRlegenda}>
                        </View>
                        <View style={{ marginLeft: 7}}>
                            <Text style={{ flexDirection: 'row', textAlign: 'center', fontSize: 15 }}>Quantidade</Text>
                            <Text style={{ flexDirection: 'row', textAlign: 'center', fontSize: 15 }}>de repetições</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={style.circlesElegenda}>
                        </View>
                        <View style={{ marginLeft: 7}}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }}>Quantidade</Text>
                            <Text style={{ textAlign: 'center', fontSize: 15 }}>de erros</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#c9c9c9', width: Dimensions.get('window').width, height: 60 }}>
                    <Text style={{ justifyContent: 'center', fontSize: 29 }}>Comentário</Text>
                </View>
                <View style={{ justifyContent: 'center', backgroundColor: '#FFF', marginHorizontal: 15, height: 70 }}>
                    <Text style={{ fontSize: 18 }}>{coment ? coment : 'Nenhum comentário a respeito da sessão.'}</Text>
                </View>
            </Swipeable>
        )
    }

    function handleScroll(e) {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // do something at end of scroll
        }
    }

    return (
        <SafeAreaView style={style.container}>

            <Appbar style={style.bottom}>
                <Appbar.Header style={style.appHeader}>
                    <Appbar.BackAction
                        onPress={navigationToFinaly}
                    />
                    <Text style={style.title}>Relatórios do Paciente                                                               </Text>
                </Appbar.Header>
            </Appbar>

            <View style={{ position: 'absolute', top: -40 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#c9c9c9', width: Dimensions.get('window').width, height: 60 }}>
                    <Text style={{ justifyContent: 'center', fontSize: 29 }}>{vision ? 'Visão Geral' : 'Visão Detalhada'}</Text>
                </View>
            </View>

            {vision ?

                <Geral />
                :

                <Swipeable
                    renderLeftActions={LeftActions}
                    onSwipeableWillOpen={switchVision}>
                    <Detalhado />
                </Swipeable>
            }

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    viewDetalhado: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
    },
    actionIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        width: 15,
        height: 15,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    actionIconPower: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        width: 10,
        height: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
    },


    viewIcon: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120
    },

    swipe: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: "stretch",
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
        width: 190,
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

    circlesC: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0cc60c',
        borderColor: '#0cc60c',
        width: 25, height: 25,
        borderRadius: 90,
        borderWidth: 2,
    },

    circlesE: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f90e0d',
        borderColor: '#f90e0d',
        width: 25, height: 25,
        borderRadius: 90,
        borderWidth: 2,
    },

    circlesR: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23a0fe',
        borderColor: '#23a0fe',
        width: 25, height: 25,
        borderRadius: 90,
        borderWidth: 2,
    },

    circlesClegenda: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0cc60c',
        borderColor: '#0cc60c',
        width: 20, height: 20,
        borderRadius: 90,
        borderWidth: 2,
    },

    circlesElegenda: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f90e0d',
        borderColor: '#f90e0d',
        width: 20, height: 20,
        borderRadius: 90,
        borderWidth: 2,
    },

    circlesRlegenda: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23a0fe',
        borderColor: '#23a0fe',
        width: 20, height: 20,
        borderRadius: 90,
        borderWidth: 2,
    },

    circlesText: {
        textAlign: 'center',
        color: '#FFF',
    }
})