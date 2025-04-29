import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import ProjectCard from './ProjectCard'

export default function App() {
  const name = 'Witthaya Chomchoei'
  const links = {
    github: 'SavinVadim1312',
    email: 'vadim@notjust.dev',
    x: 'VadimNotJustDev',
  }

  const getOccupation = () => {
    return 'Founder of formixcode.com'
  }

  const renderIcons = () => {
    return (
      <View style={{ flexDirection: 'row', marginVertical: 10, gap: 10 }}>
        {links.github && <FontAwesome6 name="github" size={24} color="black" />}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
        {links.email && <FontAwesome6 name="at" size={24} color="black" />}
      </View>
    )
  }

  const onContactMe = () => {
    Linking.openURL('mailto:vadim@notjust.dev')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg',
              }}
              style={{ width: '100%', aspectRatio: 16 / 9 }}
            />

            <Image
              source={require('./assets/witthaya.png')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: 'white',
                marginTop: -75,
              }}
            />

            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Text>
            <Text>{getOccupation()}</Text>

            {renderIcons()}

            <TouchableOpacity
              onPress={onContactMe}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Contact me</Text>
            </TouchableOpacity>

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Apple Cards"
                image={require('./assets/projects/project1.jpeg')}
              />
              <ProjectCard
                name="Trello"
                image={require('./assets/projects/project2.jpeg')}
              />
              <ProjectCard
                name="Flappy bird"
                image={require('./assets/projects/project3.jpeg')}
              />
              <ProjectCard
                name="Todo app"
                image={require('./assets/projects/project4.jpeg')}
              />
            </ScrollView>

            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25, // Increased for more rounded corners
    marginTop: 15, // Added margin top for spacing
    // iOS Shadow
    shadowColor: 'purple',
    shadowOffset: { width: 0, height: 4 }, // Adjusted shadow offset
    shadowOpacity: 0.4, // Adjusted shadow opacity
    shadowRadius: 4, // Adjusted shadow radius
    // Android Shadow
    elevation: 6, // Adjusted elevation for Android shadow
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
})
