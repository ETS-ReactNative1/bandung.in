import React from 'react'
import {  } from "react-native";
import { Popover, Alert, HStack, Text, Box, ZStack, Input, Image, Icon, VStack, Pressable, Heading, ScrollView } from "native-base";
import Ion from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Pasupati from './infobdg/Pasupati'
import Cihampelas from './infobdg/Cihampelas'
import Braga from './infobdg/Braga'
import Bosscha from './infobdg/Bosscha'
import * as data from '../app.json'
import { SearchBar } from '../components/SearchBar'

export const Home = ({ navigation }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../assets/bg/ellipse.png')} alt="Ellips Header" w="100%" mt="-170px" />
            </Box>

            <VStack w="100%" h="auto" px={6} space={8}>
                <Box w="100%" h="38">
                    <SearchBar />
                </Box>
                <Box>
                    <Box w="100%" h="170px" bg="gray.200" borderRadius={10} shadow={3} /> 
                </Box>

                <ScrollView w="100%" h="320px">
                    <Heading size="sm">
                        Find Your Needs in Bandung
                    </Heading>
                    <VStack>
                        <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-around" marginY={3}>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#DCE9F2" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/damri.png')} alt="damri" />
                                </Box>
                                <Text mt="0.5">Damri</Text>
                            </Pressable>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#E4F2DC" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/angkot.png')} alt="angkot" />
                                </Box>
                                <Text mt="0.5">Angkot</Text>
                            </Pressable>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#F7FAD3" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/kos.png')} alt="kosan" />
                                </Box>
                                <Text mt="0.5">Kostan</Text>
                            </Pressable>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#DCF2ED" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/laundry.png')} alt="laundry" />
                                </Box>
                                <Text mt="0.5">Laundry</Text>
                            </Pressable>
                        </Box>
                        <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-around" marginY={3}>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#DCE9F2" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/olahraga.png')} alt="olahraga" />
                                </Box>
                                <Text mt="0.5">Sarana</Text>
                                <Text>Olahraga</Text>
                            </Pressable>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#F2EEDC" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/kopi.png')} alt="kafe" />
                                </Box>
                                <Text mt="0.5">Cafe</Text>
                                <Text>{' '}</Text>
                            </Pressable>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#FFEDE3" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/wisata.png')} alt="wisata" />
                                </Box>
                                <Text mt="0.5">Tempat</Text>
                                <Text>Wisata</Text>
                            </Pressable>
                            <Pressable display="flex" flexDir="column" justifyContent="center" alignItems="center">
                                <Box borderRadius={10} w="50px" h="50px" bg="#E9FCDA" display="flex" justifyContent="center" alignItems="center">
                                    <Image source={require('../assets/explore/rs.png')} alt="rs" />
                                </Box>
                                <Text mt="0.5">Rumah</Text>
                                <Text>Sakit</Text>
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
                            <Heading fontWeight="bold" size="md" color="gray.700">Jalan Layang Pasupati Resmi Ganti Nama</Heading>
                        </Box>
                    </Pressable>
                    <Pressable onPress={() => {navigation.push('Cihampelas')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center" >
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/cihampelas.jpeg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size="md" color="gray.700">Geliat Cihampelas Saat Libur Lebaran</Heading>
                        </Box>
                    </Pressable>
                    <Pressable onPress={() => {navigation.push('Braga')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center">
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/braga.jpg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size="md" color="gray.700">Jalan Braga: Tempat Favorit di Bandung</Heading>
                        </Box>
                    </Pressable>
                    <Pressable onPress={() => {navigation.push('Bosscha')}} w="100%" h="100px" bg="#fff" borderRadius={10} my={2} shadow={3} display="flex" flexDir="row" alignItems="center">
                        <Box flex={1} h="100px" w="100%" borderLeftRadius={10}>
                            <Image source={require('../assets/infobdg/bosscha.jpg')} alt="gambar info" w="100%" h="100%" resizeMode='cover' borderLeftRadius={10} />
                        </Box>
                        <Box flex={2} padding={4}>
                            <Heading fontWeight="bold" size="md" color="gray.700">Berkenalan dengan Observatorium Bosscha</Heading>
                        </Box>
                    </Pressable>
                </ScrollView>
            </VStack>
        </ZStack>
      </Box>
    )
}