import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREENS, StackParamsList } from './src/routes/navigation.types'
import { NavigationContainer } from '@react-navigation/native'
import { ScreenProps, Screens } from './src/routes/routes'

export const Stack = createNativeStackNavigator<StackParamsList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.WELCOME}
        screenOptions={{ animation: 'simple_push' }}>
        {Screens.map((screen: ScreenProps) => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
