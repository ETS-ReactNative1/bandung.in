import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text } from 'native-base';
 
export const Bosscha = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" mb="-10px" bottom="0" right="0" size={450} blurRadius={10} />
            <Image source={require("../../assets/bg/bg.png")} alt="Background Blur" position="absolute" top="0" left="0" size={250} style={{transform:[{scaleX:-1}, {scaleY:-1}]}} />
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-140px" />
            </Box>

            <ScrollView mt="50px" w="100%" h="700px" px={6} space={8} display="flex">
                <Heading textAlign="center">Berkenalan dengan Observatorium Bosscha</Heading>
                <Image borderRadius={10} shadow="4" my={7} source={require('../../assets/infobdg/bosscha.jpg')} alt="gambar info" w="100%" maxH={200} resizeMode='cover' />
                <Text mb={4}>
                    Observatorium Bosscha adalah salah satu destinasi wisata edukatif yang aslinya merupakan lembaga khusus pendidikan dan penelitian. Observatorium ini berada di bawah naungan Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) Istitut Teknologi Bandung atau ITB.
                </Text>
                <Text mb={4}>
                    Observatorium tertua di Indonesia ini dibangun pada jama kolonilaisme Belanda oleh Nederlandsch Indische Sterrenkundige Vereeniging (NISV) pada tahun 1923. Nama Bosscha diambil dari nama pengusaha donatur bangunan ini yaitu Karel Albert Rudolph Bosscha.
                </Text>
                <Text mb={4}>
                    Bangunan bersejarah ini telah diresmikan sebagai Benda Cagar Budaya pada tahun 2004, lalu pada tahun 2008 ditetapkan sebagai salah satu Obyek Vital nasional.
                </Text>
                <Text>
                Observatorium Bosscha kini berusia hampir 100 tahun dan dilengkapi dengan 12 teleskop dengan fungsi yang berbeda-beda. Namun dari ke-12 teleskop tersebut hanya enam yang digunakan untuk kegiatan penelitian, salah satunya adalah Teleskop GAO Remote Telescope System. 
                </Text>
            </ScrollView>
        </ZStack>
      </Box>
    )
  }