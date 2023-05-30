import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import COLOR from "../../constants/color";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.lightGray,
        justifyContent: "center",
        alignItems: "center",

    },
    btnPrimary: {
        backgroundColor: "#0000FF",
    },
    textWhite: {
        color: "#ffffff",
    },
    textCenter: {
        textAlign: "center",
    },

})

const Login = () => {
  return (
    <SafeAreaView style={style.container}>
        <View style={{backgroundColor: "#ffffff"}}>
            <View>
                <Text style={[{fontSize: '30px'}, style.textCenter]}>Login</Text>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput />
            </View>
            <View>
                <TouchableOpacity style={style.btnPrimary}>
                    <Text style={[style.textWhite, style.textCenter]}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Tidak punya akun?</Text>
                <Link href={'/register'} style={{color: '#6495ED'}}> Register</Link>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login