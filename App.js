import * as React from 'react';
import { NativeBaseProvider, Text, Box, Image } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { AppNavigation } from "./utils/AppNavigation";
import { Footer } from "./components/Footer";
import * as Screens from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screen from  './screens'
import { Pasupati } from './screens/infobdg/Pasupati'
import { Cihampelas } from './screens/infobdg/Cihampelas'
import { Braga } from './screens/infobdg/Braga'
import { Bosscha } from './screens/infobdg/Bosscha'
import { About } from './screens/About'

const Root = createNativeStackNavigator()

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
          <Root.Navigator
              screenOptions={{
                  headerShadowVisible: false,
                  headerStyle: {
                      backgroundColor: '#A4C6F9',
                  },
                  headerTitleAlign: 'center',
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                      fontWeight: 'bold',
              }}}
          >
              <Root.Screen name="Home" component={Screen.Home} options={{ title: "Bandung.in",  }} />
              <Root.Screen name="About" component={About} options={{ headerBackVisible: false, title: "About Bandung.in",  }} />
              <Root.Screen name="Pasupati" component={Pasupati} options={{ title: "Info Bandung",  }} />
              <Root.Screen name="Cihampelas" component={Cihampelas} options={{ title: "Info Bandung",  }} />
              <Root.Screen name="Braga" component={Braga} options={{ title: "Info Bandung",  }} />
              <Root.Screen name="Bosscha" component={Bosscha} options={{ title: "Info Bandung",  }} />
          </Root.Navigator>
          <Footer />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}