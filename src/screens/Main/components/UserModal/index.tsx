import React from 'react'
import { User } from '../../../../store/reducers/users/users.types'
import { Text, View } from 'react-native'
import { Avatar } from '../../../../components/Avatar'
import { CustomModal } from '../../../../components/Modal'
import { styles } from './styles'

type UserModalProps = {
  user: User
  onClose: () => void
}

export const UserModal = ({ user, onClose }: UserModalProps) => {
  const fullName = user.name + ' ' + user.lastName

  return (
    <CustomModal isVisible={!!user} onClose={onClose}>
      <View style={styles.components}>
        <Avatar name={user.name} style={{ width: 50, height: 50, marginBottom: 20 }} />
        <Text>{fullName}</Text>
        <Text>Raring: {user.rating}</Text>
      </View>
    </CustomModal>
  )
}
