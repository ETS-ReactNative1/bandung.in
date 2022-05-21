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
import { Team } from './screens/about/Team';
import { Sponsor } from './screens/about/Sponsor';
import { Explorers } from './screens/about/Explorers';
import { Changelog } from './screens/about/Changelog';
import { Updates } from './screens/about/Updates';
import { Angkot } from './screens/features/Angkot';
import { Damri } from './screens/features/Damri';
import { Kontak } from './screens/Kontak';
import { Darurat } from './screens/kontak/Darurat'
import { Pelayanan } from './screens/kontak/Pelayanan'
import { Transportasi } from './screens/kontak/Transportasi'
import { RS } from './screens/kontak/RS'
import { BandungMap } from './screens/BandungMap';
import { Kosan } from './screens/maps/Kosan';
import { Coffee } from './screens/maps/Coffee';
import { Eatery } from './screens/maps/Eatery';
import { Laundry } from './screens/maps/Laundry';
import { Medis } from './screens/maps/Medis';
import { Olahraga } from './screens/maps/Olahraga';
import { Wisata } from './screens/maps/Wisata';
import { StatusBar } from 'react-native';

const Root = createNativeStackNavigator()

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};

export default function App() {
  return (
      <NativeBaseProvider config={config}>
        <StatusBar backgroundColor="#A1C7F6" barStyle='light-content' />
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
                <Root.Screen name="Darurat" component={Darurat} options={{ title: "Kontak Darurat",  }} />
                <Root.Screen name="RS" component={RS} options={{ title: "Kontak RS dan Medis",  }} />
                <Root.Screen name="Transportasi" component={Transportasi} options={{ title: "Kontak Transportasi",  }} />
                <Root.Screen name="Pelayanan" component={Pelayanan} options={{ title: "Kontak Pelayanan",  }} />
                <Root.Screen name="Angkot" component={Angkot} options={{ title: "Angkot | Powered by ProjectKiri",  }} />
                <Root.Screen name="Damri" component={Damri} options={{ title: "Bus | Powered by Moovit",  }} />
                <Root.Screen name="Kosan" component={Kosan} options={{ title: "Kostan | Map",  }} />
                <Root.Screen name="Coffee" component={Coffee} options={{ title: "Coffee and Spaces | Map",  }} />
                <Root.Screen name="Eatery" component={Eatery} options={{ title: "Tempat Makan | Map",  }} />
                <Root.Screen name="Laundry" component={Laundry} options={{ title: "Laundry | Map",  }} />
                <Root.Screen name="Medis" component={Medis} options={{ title: "Fasilitas Kesehatan | Map",  }} />
                <Root.Screen name="Olahraga" component={Olahraga} options={{ title: "Sarana Olahraga | Map",  }} />
                <Root.Screen name="Wisata" component={Wisata} options={{ title: "Wisata dan Rekreasi | Map",  }} />
                <Root.Screen name="Kontak" component={Kontak} options={{ headerBackVisible: false, title: "Cari Kontak Penting",  }} />
                <Root.Screen name="BandungMap" component={BandungMap} options={{ headerBackVisible: false, title: "Map",  }} />
                <Root.Screen name="About" component={About} options={{ headerBackVisible: false, title: "About Bandung.in",  }} />
                <Root.Screen name="Team" component={Team} options={{ title: "Bandung.in Team",  }} />
                <Root.Screen name="Sponsor" component={Sponsor} options={{ title: "Bandung.in Sponsor",  }} />
                <Root.Screen name="Explorers" component={Explorers} options={{ title: "Bandung.in Explorers",  }} />
                <Root.Screen name="Changelog" component={Changelog} options={{ title: "Changelog",  }} />
                <Root.Screen name="Updates" component={Updates} options={{ title: "Future Updates",  }} />
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