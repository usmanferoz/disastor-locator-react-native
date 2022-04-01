import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput , Alert} from 'react-native';
import Home from './Home';


const Signup = ({ navigation }) => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const request= async (values) =>{
        let Options = {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        };

        let response = await fetch("http://10.120.96.41:80/users/signup/",Options);
        let data = await response.json();

        

        setTimeout(()=>{
            console.log(data)
            if (data.error==false){
            Alert.alert(
                "USER SUCCESSFULLY CREATED",
                null,
                [
                  { text: "Go to Login", onPress: () => {
                      navigation.navigate('Login')
                  } }
                ]
              );
        }
        },8000)
    }
    const handle =()=>{
        values = {username,email,password}
        request(values);
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
                    placeholder='Email'
                    onChangeText={(value) => {
                        setEmail(value);
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
            
            <View style={Styles.btn}>
                <Button
                    title='Submit'
                    onPress={() => {
                        handle();
                    }}
                ></Button>
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
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    btn:{
        marginTop:20
    }

})
export default Signup;