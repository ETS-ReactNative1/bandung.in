import { useNavigation } from '@react-navigation/native';
import { Box, Center, HStack, Pressable, Icon } from 'native-base';
import Ent from 'react-native-vector-icons/Entypo';
import Fa from 'react-native-vector-icons/FontAwesome5';
import Ion from 'react-native-vector-icons/Ionicons';
import About from '../screens/About'
import Home from '../screens/Home'
import Kontak from '../screens/Kontak'
import { BandungMap } from '../screens/BandungMap';

export const Footer = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <HStack h="65px" bg={{linearGradient: {colors: ["#B5C1FF", "#79ABDF"],}}} alignItems="center" safeAreaBottom shadow={6} borderTopRadius={13}>
          <Pressable flex={1} onPress={() => navigation.navigate('Home')}>
              <Center>
                  <Icon as={Ent} name={'home'} size={30} color={'#fff'} />
              </Center>
          </Pressable>
          <Pressable flex={1} onPress={() => navigation.navigate('BandungMap')}>
              <Center>
                  <Icon as={Fa} name={'map-marked-alt'} size={25} color={'#fff'} solid />
              </Center>
          </Pressable>
          <Pressable flex={1} onPress={() => navigation.navigate('Kontak')}>
              <Center>
                  <Icon as={Ent} name={'old-phone'} size={25} color={'#fff'} solid />
              </Center>
          </Pressable>
          <Pressable flex={1} onPress={() => navigation.navigate('About')}>
              <Center>
                  <Icon as={Ion} name={'people-circle'} size={30} color={'#fff'} />
              </Center>
          </Pressable>
      </HStack>
    </Box>
  )
}