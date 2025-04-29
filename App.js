import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context' // Import from the correct library

export default function App() {
  return (
    // Wrap with SafeAreaView from react-native-safe-area-context
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('./assets/favicon.png')}
          style={{ width: 80, height: 80 }}
        />
        <Text>Hi there 4 !!!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // Style for the SafeAreaView
  safeArea: {
    flex: 1,
    backgroundColor: '#90EE90', // Light green color
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
