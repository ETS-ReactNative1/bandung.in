import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text } from 'native-base';
 
export const Changelog = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-140px" />
            </Box>

            <ScrollView mt="50px" w="100%" h="100%" px={6} space={8} display="flex">
                <Heading textAlign="center" mb={8}>Changelog</Heading>
                <Heading size='sm'>6 May 2022</Heading>
                <Text mb={6}>• Initial version of Bandung.in launched.</Text>
                <Heading size='sm'>7 May 2022</Heading>
                <Text>• Readjust adaptive icon for Android.</Text>
                <Text>• Justify news text.</Text>
                <Text mb={6}>• Fix ScrollView bugs.</Text>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }