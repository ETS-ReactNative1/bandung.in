import { Popover, Alert, HStack, Text, Box, ZStack, Input, Image, Icon, VStack, Pressable, Heading, ScrollView } from "native-base";
import Ion from 'react-native-vector-icons/Ionicons';
import * as data from '../app.json'

function Notification() {
    const notifArray = [{
        status: "info",
        title: "Tim Bandung.in mengucapkan selamat Hari Raya Idul Fitri."
      }, {
        status: "warning",
        title: "Beberapa fitur masih dalam proses optimalisasi dan pengembangan"
      }, {
        status: "info",
        title: "Selamat datang di Bandung.in!"
      }, {
        status: "success",
        title: "App downloaded properly."
      }]

    return (
    <Box h="60%" w="100%" alignItems="center">
        <Popover trigger={triggerProps => {
        return <Pressable {...triggerProps}>
                <Icon as={Ion} name={'notifications'} size={30} color={'#fff'} />
              </Pressable>;
      }}>
          <Popover.Content marginRight={6} accessibilityLabel="Notification" bg="white" w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header><Heading color="coolGray.700" size='md'>Notifications</Heading></Popover.Header>
            <Popover.Body>
                <ScrollView h="200px">
                    <VStack space={2}>
                        {notifArray.map((notif) => (
                            <Alert w="100%" status={notif.status}>
                            <VStack space={2} flexShrink={1} w="100%">
                            <HStack flexShrink={1} space={2} justifyContent="space-between">
                                <HStack space={2} flexShrink={1}>
                                <Alert.Icon mt="1" />
                                <Text fontSize="md" color="coolGray.800" mr={5}>
                                    {notif.title}
                                </Text>
                                </HStack>
                            </HStack>
                            </VStack>
                        </Alert>
                        ))}
                    </VStack>
                </ScrollView>
            </Popover.Body>
            <Popover.Footer bg="white" justifyContent="flex-end">
              <Text color="coolGray.700">Bandung.in v{data.expo.version}</Text>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>
    )
}

export const SearchBar = () => {
    return (
        <Box flexDir="row">
            <ZStack w="100%" flex={6}>
                <Box bg="white" w="100%" h="38" maxH="38" borderRadius="10" />
                <Input borderColor="#000" maxH="38" variant="unstyled" placeholder="Search for Angkot, Damri, Kost, etc" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ion name="search" />} />}  />
            </ZStack>
            <Box h="38px" w="100%" flex={1} display="flex" alignItems="flex-end" justifyContent="center" >
                <Notification />
            </Box>
        </Box>
    )
}