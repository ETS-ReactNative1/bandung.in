import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text } from 'native-base';
 
export const Pasupati = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-140px" />
            </Box>

            <ScrollView mt="50px" w="100%" h="100%" px={6} space={8} display="flex">
                <Heading textAlign="center">Jalan Layang Pasupati Bandung Resmi Ganti Nama Jadi Prof. Dr. Mochtar Kusumaatmadja</Heading>
                <Image borderRadius={10} shadow="4" my={7} source={require('../../assets/infobdg/pasupati.jpg')} alt="gambar info" w="100%" maxH={200} resizeMode='cover' />
                <Text textAlign='justify' mb={4}>
                    Jalan Layang Pasupati resmi berganti nama. Jalan layang ikonik Kota Bandung ini kini memiliki nama baru, yakni Jalan Prof Mochtar Kusumaatmadja. 
                </Text>
                <Text textAlign='justify' mb={4}>
                    Pergantian nama diresmikan langsung oleh Gubernur Jawa Barat Ridwan Kamil di Gedung Inspektorat Provinsi Jawa Barat, Kota Bandung, Selasa (1/3/2022). 
                </Text>
                <Text textAlign='justify' mb={4}>
                    Menurut Ridwan Kamil, pemberian nama Prof Mochtar Kusumaatmadja sebagai bentuk penghormatan atas jasa-jasanya kepada Indonesia dan Jawa Barat lewat Wawasan Nusantara di kancah internasional. 
                </Text>
                <Text textAlign='justify'>
                    Wawasan Nusantara merujuk pada cara pandang bangsa Indonesia mengenai diri dan lingkungannya sebagai negara kepulauan dengan mengutamakan persatuan dan kesatuan wilayah. Wawasan Nusantara tercetus dari gagasan batas teritorial Laut Indonesia melalui Deklarasi Djuanda pada 1957. 
                </Text>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }