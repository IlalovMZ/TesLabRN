import React, { useCallback } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamsList } from '../../routes/navigation.types'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type HeaderProps = {
  navigation: StackNavigationProp<StackParamsList>
}

export const Header = React.memo(({ navigation }: HeaderProps) => {
  const onGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onGoBack}>
        <Text>Назад</Text>
      </TouchableOpacity>
    </View>
  )
})
