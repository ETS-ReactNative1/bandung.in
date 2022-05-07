import React from 'react';
import { Box, ZStack, ScrollView, Image, Heading, Text, VStack, Center, Icon, Link, Pressable, HStack } from 'native-base';
import * as data from '../../app.json'
import Ent from 'react-native-vector-icons/Entypo'
import Fa from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from '../../components/SearchBar';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { WebView } from 'react-native-webview';
 
export const Darurat = ({ navigation, route }) => {
    return (
        <Box bg="#fff" w="100%" h="100%">
            <ZStack h="100%">
                <Box mt='-3' bg='black' w='100%' h='110%' flex={1} overflow='hidden'>
                    <WebView setBuiltInZoomControls={false} source={{ uri: 'https://kontakpentingbandung.firebaseapp.com/darurat' }} />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="flex-start" w="100%" h="100%">
                    <Image source={require('../../assets/bg/ellipse2.png')} alt="Ellips Header" w="100%" mt="-90px" />
                </Box>

                <Box px={6} w="110%">
                    <SearchBar />
                </Box>
            </ZStack>
        </Box>
    )
  }