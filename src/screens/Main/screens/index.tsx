import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl, SafeAreaView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SCREENS, StackParamsList } from '../../../routes/navigation.types'
import { Header } from '../../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAction } from '../../../store/actions/users.actions'
import {
  selectIsLoaded,
  selectIsLoading,
  selectPaginationUsers,
} from '../../../store/selectors/users.selectors'
import { UserHeader } from '../components/UserHeader'
import { styles } from './styles'
import { User } from '../../../store/reducers/users/users.types'
import { UserModal } from '../components/UserModal'
import { Preloader } from '../../../components/Preloader'

const Main = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation<StackNavigationProp<StackParamsList, SCREENS.MAIN>>()

  const isLoading = useSelector(selectIsLoading)
  const isLoaded = useSelector(selectIsLoaded)

  const [activeUser, setActiveUser] = useState<User>()
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [loadedUsers, setLoadedUsers] = useState<number>(20)

  const users = useSelector(selectPaginationUsers(loadedUsers, 20))

  const onUpdate = () => setIsUpdate(true)

  const onRefresh = useCallback(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  const onEndReached = () => setLoadedUsers(users.length)

  useEffect(() => {
    onRefresh()
  }, [onRefresh])

  useEffect(() => {
    const interval = setInterval(onRefresh, 30000)

    if (isUpdate) {
      clearInterval(interval)
      setIsUpdate(false)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isUpdate, onRefresh])

  if (!isLoaded) {
    return <Preloader />
  }

  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <FlatList
        data={users}
        style={styles.list}
        refreshing={isLoaded}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.8}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              onRefresh()
              onUpdate()
            }}
            tintColor={'black'}
            colors={['black']}
          />
        }
        renderItem={({ item }) => <UserHeader user={item} onSelect={() => setActiveUser(item)} />}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{ marginBottom: 30 }} />}
      />
      {activeUser && <UserModal user={activeUser} onClose={() => setActiveUser(undefined)} />}
    </SafeAreaView>
  )
}

export default Main
