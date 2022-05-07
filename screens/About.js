import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text, VStack, Center, Icon, Link, Pressable, HStack } from 'native-base';
import * as data from '../app.json'
import Ent from 'react-native-vector-icons/Entypo'
import Fa from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from '../components/SearchBar';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Team from '../screens/about/Team'
import Changelog from '../screens/about/Changelog'
import Updates from '../screens/about/Updates'

const MenuItems = ({ provider, icon, title, desc, size }) => {
    return (
        <Box h="70px" w="100%" display="flex" flexDir="row">
            <Box flex={1} w="100%" display="flex" alignItems="center" justifyContent="center">
            <ZStack alignItems="center" justifyContent="center">
                <Box bg="indigo.50" size="44" rounded="full" />
                <Icon as={provider} name={icon}  size={size} color={'indigo.400'} />
            </ZStack>
            </Box>
            <Box bg="blue" pl={5} flex={5} w="100%" display="flex" alignItems="flex-start" justifyContent="center">
                <VStack>
                    <Heading color="coolGray.700" size="md">
                        {title}
                    </Heading>
                    <Text color="coolGray.500">
                        {desc}
                    </Text>
                </VStack>
            </Box>
            <Box flex={1} w="100%" h="100%" display="flex" alignItems="center" justifyContent="center">
                <Icon as={Ent} name={'chevron-right'} size={30} color={'coolGray.500'} />
            </Box>
        </Box>
    )
}
 
export const About = ({ navigation, route }) => {
    return (
        <Box bg="#fff" w="100%" h="100%">
            <ZStack h="100%">
                <Image source={require("../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
                <Image source={require("../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
                <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                    <Image source={require('../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-90px" />
                </Box>

                <Box px={6} w="100%">
                    <SearchBar />
                </Box>
                <ScrollView mt="80px" w="100%" h="100%" space={2} display="flex">
                    <VStack>
                        <Center mt={7}>
                            <Image
                                source={require('../assets/icon.png')}
                                alt="Alternate Text"
                                size="xl"
                            />
                            <Heading mt={2} fontSize="25px">
                                Bandung.in
                            </Heading>
                            <Text>
                                v{data.expo.version}
                            </Text>
                        </Center>
                        <Center px={6}>
                            <Box borderRadius="xl" mx="10" py={3} px={5} mt={10} w="100%" bg="#ffffff" shadow={5} mb={10}>
                                <VStack>
                                    <Pressable onPress={() => navigation.push('Team')}>
                                        <MenuItems provider={Fa} icon='users' title='Bandung.in Team' desc='Group 7 of K03 PRD FITB ITB' size='4' />
                                    </Pressable>
                                    <Pressable onPress={() => navigation.push('Changelog')}>
                                        <MenuItems provider={Ent} icon='back-in-time' title='Changelog' desc='Changelog and updates of the app' size='5' />
                                    </Pressable>
                                    <Pressable onPress={() => navigation.push('Updates')}>
                                        <MenuItems provider={MCI} icon='timeline-text' title='Future Updates' desc='Future application updates' size='5' />
                                    </Pressable>
                                </VStack>
                            </Box>
                        </Center>
                        <Center px={6}>
                            <Box borderRadius="xl" mx="10" py={3} px={5} mt={3} w="100%" bg="#ffffff" shadow={5} mb={10}>
                                <VStack>
                                    <Link href="https://github.com/farellfaiz/bandung.in">
                                        <MenuItems provider={Fa} icon='github' title='Github' desc='View code on Github' size='4' />
                                    </Link>
                                    <Link href="https://expo.dev/@farellfaiz">
                                        <MenuItems provider={Ent} icon='chevron-up' title='Expo' desc='View project on Expo' size='4' />
                                    </Link>
                                </VStack>
                            </Box>
                            <HStack alignItems='center' justifyContent="center" space={4}>
                                <Image size={20} source={require("../assets/itb.png")} alt="itb" />
                                <Image size={20} source={require("../assets/fitb21.png")} alt="fitb 2021" />
                            </HStack>
                            <Center mb={20} mt={5}>
                                <Text fontSize="13px" color="coolGray.500">Introduction to Engineering and Design</Text>
                                <Text fontSize="13px" color="coolGray.500">Faculty of Earth Science and Technology</Text>
                                <Text fontSize="13px" color="coolGray.500">Institut Teknologi Bandung</Text>
                                <Text mt={2} fontSize="13px" color="coolGray.500" mb={10}>Group 7 at K03 </Text>
                            </Center>
                        </Center>
                    </VStack>
                </ScrollView>
            </ZStack>
        </Box>
    )
  }