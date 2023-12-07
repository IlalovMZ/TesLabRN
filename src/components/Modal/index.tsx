import React, { useMemo } from 'react'
import { ModalProps } from 'react-native-modal'
import Modal from 'react-native-modal'
import { StyleProp, View, ViewStyle } from 'react-native'
import { styles } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type CustomModalProps = {
  onClose: () => void
} & ModalProps

export const CustomModal = ({
  isVisible,
  onClose,
  children,
  ...otherModalProps
}: Partial<CustomModalProps>) => {
  const { top, bottom, left, right } = useSafeAreaInsets()

  const modalStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      styles.container,
      {
        marginBottom: bottom + 40,
        marginTop: top + 40,
        marginLeft: left + 40,
        marginRight: right + 40,
      },
    ],
    [bottom, left, right, top],
  )

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection="down"
      {...otherModalProps}>
      <View style={modalStyle}>{children}</View>
    </Modal>
  )
}
