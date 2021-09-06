import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function Register({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor="#000000"
                    onChangeText={(name) => setName(name)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email."
                    placeholderTextColor="#000000"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password."
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity onPress={() => {
                navigation.replace('login');
            }}>
                <Text style={styles.forgotButton}>Already have an account? <Text style={{color: '#0099ff'}}>Login.</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121a27',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: "#ffffff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#0066ff",
    },
    forgotButton: {
        color: '#ffffff',
        height: 30,
    },
})