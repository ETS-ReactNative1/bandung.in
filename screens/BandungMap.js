import React from 'react';
import { Icon, Center, Box, ZStack, ScrollView, Image, Heading, Text, VStack, HStack, Pressable } from 'native-base';
import Ma from 'react-native-vector-icons/MaterialCommunityIcons'
import Fa from 'react-native-vector-icons/FontAwesome5'
import { Darurat } from './kontak/Darurat'
import { Pelayanan } from './kontak/Pelayanan'
import { Transportasi } from './kontak/Transportasi'
import { RS } from './kontak/RS'
import { SearchBar } from '../components/SearchBar';
import { WebView } from 'react-native-webview';

export const BandungMap = ({ navigation, route }) => {
    return (
      <Box bg="#fff" w="100%" h="100%">
        <ZStack h="100%">
            <Box bg='black' w='100%' h='120%' flex={1} overflow='hidden'>
                <WebView setBuiltInZoomControls={false} source={{ uri: 'https://www.google.com/maps/d/u/0/embed?mid=14IDiHJVFunln1OCk3SMjpYzhuMFiLiYI&ehbc=2E312F' }} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                <Image source={require('../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-90px" />
            </Box>
            <Box px={6} w="100%">
                <SearchBar />
            </Box>
        </ZStack>
      </Box>
    )
  }