import React, { useCallback } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS, StackParamsList } from '../../routes/navigation.types'
import { styles } from './styles'

const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamsList, SCREENS.WELCOME>>()

  const onNavigateToMain = useCallback(() => {
    navigation.navigate(SCREENS.MAIN)
  }, [navigation])

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <TouchableOpacity style={styles.btnText} onPress={onNavigateToMain} activeOpacity={0.6}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Welcome
