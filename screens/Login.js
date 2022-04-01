import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import Home from './Home';


const Login = ({ navigation }) => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState({});

    const request = (values) => {
        let Options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        };

        fetch("http://10.120.96.41:80/users/login/", Options)
            .then(response => response.json())
            .then(data => setToken(data.data))
            .catch(error => console.log(error));

        setTimeout(() => {
            console.log(token);
            if (token.token != null) {
                let auth = token.token
                Alert.alert(
                    "LOGIN SUCCESFULL",
                    null,
                    [
                        {
                            text: "Go to APP", onPress: () => {
                                navigation.navigate('Home', { auth })
                            }
                        }]
                );
            }

            else {
                Alert.alert(
                    "USER NOT FOUND",
                    null,
                    [
                        {
                            text: "LOGIN AGAIN", onPress: () => {
                                navigation.navigate('Login')
                            }
                        }]
                );
            }
        }, 10000)
    }

    const handle = () => {
        values = { username, password }
        request(values);
        console.log(values)
    }


    return (
        <View style={Styles.container}>
            <View style={Styles.view}>
                <TextInput
                    style={Styles.input}
                    placeholder='Username'
                    onChangeText={(value) => {
                        setName(value);
                    }}
                />
            </View>
            <View style={Styles.view}>
                <TextInput
                    style={Styles.input}
                    secureTextEntry={true}
                    placeholder='Password'
                    onChangeText={(value) => {
                        setPassword(value);
                    }}
                />
            </View>
            <View style={Styles.view}>
                <Button
                    title='Submit'
                    onPress={() => {
                        handle();
                    }}
                ></Button>
            </View>

            <View style={Styles.view1}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Registration")
                    }}>
                    <Text style={Styles.item}>DONT HAVE ACCOUNT?</Text>
                    <Text style={Styles.item}>CREATE HERE</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCF9',
        alignContent: 'center',
        textAlign: 'center',
        paddingTop: 100
    },
    input: {
        padding: 10,
        borderWidth: 0.8,
        borderColor: '#E4E7EA',
        marginTop: 10,
        color: 'black',

    }
    ,
    view: {
        marginTop: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    item: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#909090"
    },

    view1: {
        marginLeft: 30,
        marginTop: 30,
    }
})
export default Login;