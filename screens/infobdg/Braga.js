import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text } from 'native-base';
 
export const Braga = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-140px" />
            </Box>

            <ScrollView mt="50px" w="100%" h="100%" px={6} space={8} display="flex">
                <Heading textAlign="center">Jalan Braga: Tempat Favorit di Bandung</Heading>
                <Image borderRadius={10} shadow="4" my={7} source={require('../../assets/infobdg/braga.jpg')} alt="gambar info" w="100%" maxH={200} resizeMode='cover' />
                <Text textAlign='justify' mb={4}>
                    Jalan Braga telah menjadi sebuah ikon populer Paris van Java, Bandung. Jalan yang dulunya terkenal dengan nama De meest Eupoeesche winkelstraat van Indie alias jalan perbelanjaan bangsa eropa terkemuka di Hindia Belanda ini mampu menghadirkan vibe eksotisme Eropa.
                </Text>
                <Text textAlign='justify' mb={4}>
                    Meskipun tidak sepanjang Champs de Elysees di Paris, namun jalan sepanjang satu kilometer ini tetap mampu membawa suasana yang sentimentil.
                </Text>
                <Text textAlign='justify' mb={4}>
                    Seperti siklus Jalan Braga yang akan semakin ramai selepas matahari membenamkan dirinya, berganti dengan gemerlap lampu di Jalan Braga.
                </Text>
                <Text textAlign='justify' mb={4}>
                Jalan ini sebenarnya telah lama eksis di Bandung. Braga berasal dari kata Ngabaraga dalam bahasa Sunda yang berarti bergaya.
                </Text>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }