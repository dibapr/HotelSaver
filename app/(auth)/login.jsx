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

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === auth.email && password === auth.password) {
            dispatch(login())
            router.replace('/home')
        }
    }

  return (
    <SafeAreaView style={style.container}>
        <View style={{backgroundColor: "#ffffff"}}>
            <View>
                <Text style={[{fontSize: '30px'}, style.textCenter]}>Login</Text>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput onChange={(e) => {
                    setEmail(e.target.value)
                }} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput onChange={(e) => {
                    setPassword(e.target.value)
                }} />
            </View>
            <View>
                <TouchableOpacity style={style.btnPrimary} onPress={(e) => {
                    handleLogin(e)
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