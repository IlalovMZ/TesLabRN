import { StyleSheet } from 'react-native'
import { HEIGHT } from '../../constants/sizes'

export const styles = StyleSheet.create({
  screen: {
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 24,
    borderColor: 'green',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
})
