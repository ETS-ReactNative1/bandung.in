import React from 'react';
import { Center, Box, ZStack, ScrollView, Image, Heading, Text, VStack, HStack, Divider, Link } from 'native-base';

export const Profile = ({ img, nama, nim }) => {
  return (
    <Box borderRadius="lg" px={3} bg='indigo.100' w='45%' h='200px' alignItems='center' justifyContent='center'>
      <Image size={20} mb={3} source={img} alt="tim" borderRadius='full'/>
      <Heading size='sm' textAlign='center'>
        {nama}
      </Heading>
      <Text color='coolGray.500' textAlign='center'>{nim}</Text>
    </Box>
  )
}

export const Explorers = ({ navigation, route }) => {
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
                    <Heading size='md' color='coolGray.800'>Bandung.in Explorers</Heading>
                    <Text fontSize="13px" color="coolGray.500">Create a better community</Text>
                    <Text fontSize="13px" color="coolGray.500">Create a better user experiences</Text>
                    <Text fontSize="13px" color="coolGray.500">Maximize the potential of Bandung.in</Text>
                  </Center>
                </Box>
                <VStack>
                  <Heading size='md' color='coolGray.800' alignSelf='center' mt='10'>Honorable Mention</Heading>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="Dr. Eng. Mirzam Abdurrachman, S.T., M.T." nim='PRD Lecturer' img={require("../../assets/explorers/mirzam.png")} />
                    <Profile nama="Dr. Idham Andri Kurniawan, S.T., M.T." nim='PRD Lecturer' img={require("../../assets/explorers/idham.jpg")} />
                  </HStack>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Profile nama="'Aisyah Qurrata'aini" nim='Lecture Assistant' img={require("../../assets/explorers/aisyah.png")} />
                  </HStack>
                  <Divider my='6' thickness='1.5' width='40%' alignSelf='center' bg='indigo.300' />
                  <Heading size='md' color='coolGray.800' alignSelf='center'>Explorers</Heading>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Link justifyContent='center' w='100%' href="https://forms.gle/x8zg7WycQz5aLGvv6">
                      <Profile nama="Be the first" nim='Tap to contribute' img={require("../../assets/user.png")} />
                    </Link>
                  </HStack>
                  <Divider my='6' thickness='1.5' width='40%' alignSelf='center' bg='indigo.300' />
                  <Heading size='md' color='coolGray.800' alignSelf='center'>Developers</Heading>
                  <HStack mt={4} space={4} justifyContent='center'>
                    <Link justifyContent='center' w='100%' href="https://github.com/farellfaiz/bandung.in">
                      <Profile nama="Be the first" nim='Tap to contribute' img={require("../../assets/user.png")} />
                    </Link>
                  </HStack>
                </VStack>
              </VStack>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }