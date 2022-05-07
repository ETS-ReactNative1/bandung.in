import React from 'react';
import { Center, Box, ZStack, ScrollView, Image, Heading, Text, VStack, HStack } from 'native-base';

export const Profile = ({ img, nama, nim }) => {
  return (
    <Box borderRadius="lg" px={3} bg='indigo.100' w='45%' h='200px' alignItems='center' justifyContent='center'>
      <Image size={20} mb={3} source={img} alt="tim"/>
      <Heading size='sm' textAlign='center'>
        {nama}
      </Heading>
      <Text color='coolGray.500'>16321{nim}</Text>
    </Box>
  )
}

export const Team = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-140px" />
            </Box>

            <ScrollView mt="50px" w="100%" h="100%" px={6} space={8} display="flex">
              <VStack mb={40}>
                <Box mb={3}>
                  <Center>
                    <Image
                        source={require('../../assets/icon.png')}
                        alt="Alternate Text"
                        size="xl"
                    />
                    <Heading size='md' color='coolGray.800'>Bandung.in Team</Heading>
                    <Text fontSize="13px" color="coolGray.500">Introduction to Engineering and Design</Text>
                    <Text fontSize="13px" color="coolGray.500">Faculty of Earth Science and Technology</Text>
                    <Text fontSize="13px" color="coolGray.500">Institut Teknologi Bandung</Text>
                    <Text mt={2} fontSize="13px" color="coolGray.500">Group 7 at K03 </Text>
                  </Center>
                </Box>
                <VStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="Istifa' Yurbi" nim='009' img={require('../../assets/team/ubeng.png')} />
                    <Profile nama="Farell Faiz Firmansyah" nim='025' img={require('../../assets/team/faiz.png')} />
                  </HStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="Nisrina Anindya Desvianty" nim='033' img={require('../../assets/team/anis.png')} />
                    <Profile nama="M. Luthfi Satria Nugraha" nim='049' img={require('../../assets/team/luthfi.png')} />
                  </HStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="Amelia Indri Nastari S." nim='073' img={require('../../assets/team/indri.png')} />
                    <Profile nama="Yehezkiel Obed Edom S." nim='105' img={require('../../assets/team/edom.png')} />
                  </HStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="Maura Dara Bitya" nim='145' img={require('../../assets/team/maura.png')} />
                    <Profile nama="Alya Nabila Ramadhani" nim='233' img={require('../../assets/team/alya.png')} />
                  </HStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="Zelika Diva Kirana" nim='241' img={require('../../assets/team/jeje.png')} />
                  </HStack>
                  <HStack mt={7} alignItems='center' justifyContent="center" space={4}>
                    <Image size={20} source={require("../../assets/itb.png")} alt="itb" />
                    <Image size={20} source={require("../../assets/fitb21.png")} alt="fitb 2021" />
                  </HStack>
                </VStack>
              </VStack>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }