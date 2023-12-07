import React from 'react'
import { User } from '../../../../store/reducers/users/users.types'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Avatar } from '../../../../components/Avatar'

type UserHeaderProps = {
  user: User
  onSelect?: () => void
}

export const UserHeader = React.memo(({ user, onSelect }: UserHeaderProps) => {
  const fullName = user.name + ' ' + user.lastName

  return (
    <TouchableOpacity style={styles.userBlock} onPress={onSelect}>
      <Avatar name={user.name} />
      <View style={styles.info}>
        <Text>{fullName}</Text>
        {!!user.rating && <Text>{'Rating: ' + user.rating}</Text>}
      </View>
    </TouchableOpacity>
  )
})
