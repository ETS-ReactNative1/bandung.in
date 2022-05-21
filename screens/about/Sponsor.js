import React from 'react';
import { Center, Box, ZStack, ScrollView, Image, Heading, Text, VStack, HStack } from 'native-base';

export const Profile = ({ img, nama, nim }) => {
  return (
    <Box borderRadius="lg" px={3} bg='indigo.100' w='45%' h='200px' alignItems='center' justifyContent='center'>
      <Image size={20} mb={3} source={img} alt="tim"/>
      <Heading size='sm' textAlign='center'>
        {nama}
      </Heading>
      <Text textAlign='center' color='coolGray.500'>{nim}</Text>
    </Box>
  )
}

export const Sponsor = ({ navigation, route }) => {
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
                    <Heading size='md' color='coolGray.800'>Bandung.in Sponsors</Heading>
                    <Text fontSize="13px" color="coolGray.500">Thank you for sponsoring Bandung.in</Text>
                    <Text fontSize="13px" color="coolGray.500">Let's create a better experience to travel and live in Bandung</Text>
                    <Text fontSize="13px" color="coolGray.500">Maximize the potential of Bandung.in</Text>
                  </Center>
                </Box>
                <VStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="FITB ITB" nim='Main Sponsor &amp; Supporter' img={require("../../assets/itb.png")} />
                  </HStack>
                </VStack>
              </VStack>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }