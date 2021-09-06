import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#000000"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
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
        backgroundColor: "#4169e1",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }
})