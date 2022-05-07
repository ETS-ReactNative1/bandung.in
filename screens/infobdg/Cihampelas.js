import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text } from 'native-base';
 
export const Cihampelas = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-140px" />
            </Box>

            <ScrollView mt="50px" w="100%" h="100%" px={6} space={8} display="flex">
                <Heading textAlign="center">Geliat Cihampelas Saat Libur Lebaran</Heading>
                <Image borderRadius={10} shadow="4" my={7} source={require('../../assets/infobdg/cihampelas.jpeg')} alt="gambar info" w="100%" maxH={260} resizeMode='cover' />
                <Text textAlign='justify' mb={4}>
                    Langit tampak mendung menyelimuti di kawasan Cihampelas, Kota Bandung. Jalanan yang tidak begitu lebar tidak henti-hentinya dilewati kendaraan hingga menimbulkan kemacetan.
                </Text>
                <Text textAlign='justify' mb={4}>
                    Suara pedagang saling sahut mengajak pejalan kaki agar mampir ke lapak dan toko mereka untuk melihat barang dagangannya. Sesekali, terdengar suara peluit dari tukang parkir yang sedang mengatur kendaraan.
                </Text>
                <Text textAlign='justify' mb={4}>
                    Begitulah gambaran suasana di kawasan wisata belanja Cihampelas, Kota Bandung, Kamis (5/5/2022) sore. Cihampelas memang dikenal sebagai kawasan wisata belanja di Kota Bandung.
                </Text>
                <Text textAlign='justify' mb={4}>
                    Selama ini Cihampelas juga menjadi ikon dari Kota Bandung selain Gedung Sate, Jalan Braga dan tempat-tempat lainnya. Cihampelas menggeliat saat momen libur Lebaran 2022.
                </Text>
                <Text textAlign='justify' mb={4}>
                    Wisatawan memadati hampir seluruh toko dan tempat berjualan di Jalan Cihampelas sepanjang sekitar 450 meter. Pakaian dan beragam pernah-pernik jadi barang yang paling diburu pengunjung.
                </Text>
                <Text textAlign='justify' mb={20}>
                Kondisi ini membuat ekonomi di kawasan Cihampelas kembali bergeliat. Pasalnya, mereka para pedagang mengaku sempat terpuruk akibat pandemi COVID-19.
                </Text>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }