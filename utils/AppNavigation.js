import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screen from  '../screens'
import { Pasupati } from '../screens/infobdg/Pasupati'
import { Cihampelas } from '../screens/infobdg/Cihampelas'
import { Braga } from '../screens/infobdg/Braga'
import { Bosscha } from '../screens/infobdg/Bosscha'
import { About } from '../screens/About';

const Root = createNativeStackNavigator()

export const AppNavigation = () => {
  return (
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
            <Root.Screen name="About" component={About} options={{ title: "About Bandung.in",  }} />
            <Root.Screen name="Pasupati" component={Pasupati} options={{ title: "Info Bandung",  }} />
            <Root.Screen name="Cihampelas" component={Cihampelas} options={{ title: "Info Bandung",  }} />
            <Root.Screen name="Braga" component={Braga} options={{ title: "Info Bandung",  }} />
            <Root.Screen name="Bosscha" component={Bosscha} options={{ title: "Info Bandung",  }} />
        </Root.Navigator>
    </NavigationContainer>
  )
}