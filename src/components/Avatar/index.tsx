import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { styles } from './styles'

type AvatarProps = {
  name?: string
  style?: StyleProp<ViewStyle>
}

export const Avatar = React.memo(({ name, style }: AvatarProps) => {
  const firstLetter = name ? name.charAt(0) : 'X'

  return (
    <View style={[styles.avatar, style]}>
      <Text style={styles.letter}>{firstLetter}</Text>
    </View>
  )
})
