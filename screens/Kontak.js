import React from 'react';
import { Icon, Center, Box, ZStack, ScrollView, Image, Heading, Text, VStack, HStack, Pressable } from 'native-base';
import Ma from 'react-native-vector-icons/MaterialCommunityIcons'
import Fa from 'react-native-vector-icons/FontAwesome5'
import { Darurat } from './kontak/Darurat'
import { Pelayanan } from './kontak/Pelayanan'
import { Transportasi } from './kontak/Transportasi'
import { RS } from './kontak/RS'
import { SearchBar } from '../components/SearchBar';

export const Service = ({ nama, provider, icon, size }) => {
  return (
    <Box borderRadius="lg" px={3} bg='white' shadow='5' w='100%' pt={46} pb={35} alignItems='center' justifyContent='center'>
      <ZStack alignItems="center" justifyContent="center">
          <Box bg="indigo.50" size="44" rounded="full" />
          <Icon as={provider} name={icon}  size={size} color={'indigo.400'} />
      </ZStack>
      <Heading mt={8} fontSize='19px' textAlign='center'>
        {nama}
      </Heading>
    </Box>
  )
}

export const Kontak = ({ navigation, route }) => {
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
            <Box h='100%' pt='200px' w="100%" px={6} display="flex" justifyContent='center' alignItems='center'>
              <VStack mb={40}>
                <VStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Pressable w='45%' onPress={() => navigation.push('Darurat')}>
                      <Service nama="Darurat" provider={Ma} icon='alarm-light' size={30} />
                    </Pressable>
                    <Pressable w='45%' onPress={() => navigation.push('Transportasi')}>
                      <Service nama="Transportasi" provider={Ma} icon='car-multiple' size={30} />
                    </Pressable>
                  </HStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Pressable w='45%' onPress={() => navigation.push('RS')}>
                      <Service nama="Rumah Sakit dan Medis" provider={Fa} icon='hospital' size={30} />
                    </Pressable>
                    <Pressable w='45%' onPress={() => navigation.push('Pelayanan')}>
                      <Service nama="Pelayanan Masyarakat" provider={Fa} icon='hands-helping' size={30} />
                    </Pressable>
                  </HStack>
                  <Center>
                    <Text mt={5} fontWeight='normal' color='coolGray.400' fontStyle='italic'>
                      Data provided by Gulajava
                    </Text>
                  </Center>
                </VStack>
              </VStack>
            </Box>
        </ZStack>
      </Box>
    )
  }