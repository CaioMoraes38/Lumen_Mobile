import { Stack } from 'expo-router';

export default function StackLayout() {
  return(
    <Stack>
      <Stack.Screen name="login/login" 
      options={{ headerShown: false }} />
      <Stack.Screen name="register/register" 
      options={{ headerShown: true, headerTitle:'',headerTintColor:'white',
      headerStyle: { backgroundColor: '#000000', 

       } }} />
    </Stack>

  )
}
