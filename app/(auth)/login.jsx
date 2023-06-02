import React, {useState} from 'react'
import { Link, useRouter } from 'expo-router'
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import COLOR from "../../constants/color";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slice/authSlice';

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
    const dispatch = useDispatch()
    const router = useRouter()
    const auth = useSelector(state => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log("ini state", email.email, password.password);
        console.log("ini redux", auth.email, auth.password);
        if (email.email === auth.email && password.password === auth.password) {
            console.log('masuk');
            dispatch(login())
            router.back()
        }
        console.log('gagal');
    }

  return (
    <SafeAreaView style={style.container}>
        <View style={{backgroundColor: "#ffffff"}}>
            <View>
                <Text style={[{fontSize: 30}, style.textCenter]}>Login</Text>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput name="email" onChangeText={(email) => {
                    console.log(email);
                    setEmail({email})
                }} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput name="password" onChangeText={(password) => {
                    console.log(password);
                    setPassword({password})
                }} />
            </View>
            <View>
                <TouchableOpacity style={style.btnPrimary} onPress={() => {
                    handleLogin()
                }}>
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