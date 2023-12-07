import { ActivityIndicator, View } from 'react-native'
import { styles } from './styles'

export const Preloader = () => (
  <View style={styles.screen}>
    <ActivityIndicator size={'large'} color={'#000'} />
  </View>
)
