import React from 'react'
import {  } from "react-native";
import { useDisclose, Actionsheet, Popover, Alert, HStack, Text, Box, ZStack, Input, Image, Icon, VStack, Pressable, Heading, ScrollView } from "native-base";
import Ion from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Pasupati from './infobdg/Pasupati'
import Cihampelas from './infobdg/Cihampelas'
import Braga from './infobdg/Braga'
import Bosscha from './infobdg/Bosscha'
import * as data from '../app.json'
import { SearchBar } from '../components/SearchBar'
import { Angkot } from './features/Angkot';
import { useNavigation } from '@react-navigation/native';
import { Damri } from './features/Damri';
import { WebView } from 'react-native-webview';
import { BandungMap } from './BandungMap';
import { Kosan } from './maps/Kosan';
import { Coffee } from './maps/Coffee';
import { Laundry } from './maps/Laundry';
import { Medis } from './maps/Medis';
import { Olahraga } from './maps/Olahraga';
import { Wisata } from './maps/Wisata';
import { Eatery } from './maps/Eatery';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const Home = ({ navigation }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    return (
      <Box bg="#fff" w="100%" h="100%" flex='1'>
        <ZStack h="100%">
            <Image source={require("../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <VStack w="100%" h="100%" px={6} space={8}>
                <Box zIndex={100} w="100%" h="38">
                    <SearchBar />
                </Box>
                <Box>
                    <Pressable zIndex={99} onPress={() => navigation.navigate('BandungMap')} w="100%" h="170px" bg="gray.200" overflow='hidden' borderRadius={10} shadow={3}> 
                        <Box w='700px' h='380px' overflow='hidden' top='-150px' left='-137px' >
                            <WebView source={{ uri: 'https://www.google.com/maps/d/u/0/embed?mid=14IDiHJVFunln1OCk3SMjpYzhuMFiLiYI&ehbc=2E312F' }} />
                        </Box>
                    </Pressable>
                </Box>

                <ScrollView flex='1' overflow='visible'>
                    <Heading size="sm">
                        Find Your Needs in Bandung
                    </Heading>
                    <VStack>
                        <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-around" marginY={3}>
                            <Pressable onPress={() => navigation.navigate('Olahraga')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#DCE9F2" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/olahraga.png')} alt="olahraga" />
                                </Box>
                                <Text mt="0.5">Sarana</Text>
                                <Text>Olahraga</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Coffee')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#F2EEDC" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/kopi.png')} alt="kafe" />
                                </Box>
                                <Text mt="0.5">Cafe &amp;</Text>
                                <Text>Spaces</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Wisata')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#FFEDE3" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/wisata.png')} alt="wisata" />
                                </Box>
                                <Text mt="0.5">Tempat</Text>
                                <Text>Wisata</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Medis')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#E9FCDA" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/rs.png')} alt="rs" />
                                </Box>
                                <Text mt="0.5">Fasilitas</Text>
                                <Text>Kesehatan</Text>
                            </Pressable>
                        </Box>
                        <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-around" marginY={3}>
                            <Pressable onPress={() => navigation.navigate('Laundry')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#DCF2ED" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/laundry.png')} alt="damri" />
                                </Box>
                                <Text mt="0.5">Laundry</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Angkot')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#E4F2DC" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/angkot.png')} alt="angkot" />
                                </Box>
                                <Text mt="0.5">Angkot</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Kosan')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#F7FAD3" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/kos.png')} alt="kosan" />
                                </Box>
                                <Text mt="0.5">Kostan</Text>
                            </Pressable>
                            <Pressable onPress={onOpen} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="muted.100" display="flex" justifyContent="center" alignItems="center">
                                    <Icon as={MaterialIcons} name='more-horiz'  size={30} color={'muted.600'} />
                                </Box>
                                <Text mt="0.5">More</Text>
                            </Pressable>
                        </Box>
                    </VStack>
                    <Heading size="sm" mb={2}>
                        Info Bandung
                    </Heading>
                    <Pressable onPress={() => {navigation.push('Pasupati')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center" >
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/pasupati.jpg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size='sm' color="gray.700">Jalan Layang Pasupati Resmi Ganti Nama</Heading>
                        </Box>
                    </Pressable>
                    <Pressable onPress={() => {navigation.push('Cihampelas')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center" >
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/cihampelas.jpeg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size="sm" color="gray.700">Geliat Cihampelas Saat Libur Lebaran</Heading>
                        </Box>
                    </Pressable>
                    <Pressable onPress={() => {navigation.push('Braga')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center">
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/braga.jpg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size="sm" color="gray.700">Jalan Braga: Tempat Favorit di Bandung</Heading>
                        </Box>
                    </Pressable>
                    <Pressable onPress={() => {navigation.push('Bosscha')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center">
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/bosscha.jpg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size="sm" color="gray.700">Berkenalan dengan Observatorium Bosscha</Heading>
                        </Box>
                    </Pressable>
                </ScrollView>
            </VStack>
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../assets/bg/ellipse.png')} alt="Ellips Header" w="100%" mt="-170px" />
            </Box>
        </ZStack>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <VStack w='100%' px='10px'>
                    <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-around" marginY={3}>
                        <Pressable onPress={() => navigation.navigate('Eatery')} display="flex" flexDir="column" justifyContent="center" alignItems="center">
                            <Box borderRadius={10} w="50px" h="50px" bg="#DCE9F2" display="flex" justifyContent="center" alignItems="center">
                                <Image source={require('../assets/explore/eatery.png')} alt="makan" />
                            </Box>
                            <Text mt="0.5">Tempat</Text>
                            <Text>Makan</Text>
                        </Pressable>
                        <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                            <Box borderRadius={10} w="50px" h="50px" bg="muted.100" display="flex" justifyContent="center" alignItems="center">
                                <Icon as={MaterialIcons} name='directions-bus'  size={30} color={'muted.600'} />
                            </Box>
                            <Text mt="0.5">Coming</Text>
                            <Text>Soon</Text>
                        </Pressable>
                        <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                            <Box borderRadius={10} w="50px" h="50px" bg="muted.100" display="flex" justifyContent="center" alignItems="center">
                                <Icon as={MaterialIcons} name='business-center'  size={30} color={'muted.600'} />
                            </Box>
                            <Text mt="0.5">Coming</Text>
                            <Text>Soon</Text>
                        </Pressable>
                        <Box w="50px" h="50px" />
                    </Box>
                </VStack>
            </Actionsheet.Content>
        </Actionsheet>
      </Box>
    )
}