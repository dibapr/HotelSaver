import React from 'react'
import { Button } from 'react-native'
import { Stack } from 'expo-router'

const Auth = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerTitle: "Login" }}/>
      <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
    </Stack>
  )
}

export default Auth