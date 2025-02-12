import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { TabsStackScreenProps} from '../Navigation/TabsNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingButton from '../Components/OnboardingComponents/OnboardingButton'

type Props = {}
const HomeScreen = ({navigation, route }: TabsStackScreenProps<'Home'>) => {
   return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor: 'violet' }}>
      <Text> HEHE </Text>
    </SafeAreaView>
  )
}

export default HomeScreen