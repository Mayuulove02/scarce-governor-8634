import React from 'react';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Container,
    Image,
    Box,
    Flex,
    Avatar,

    Button,
    MenuDivider,

    Stack,
    useColorMode,
    Center,
    Text,
   
} from '@chakra-ui/react';
import { BsSearch } from "react-icons/bs";
import img1 from "../Utils/Logo.png"

import { ChevronDownIcon,  MoonIcon, SunIcon } from '@chakra-ui/icons';




const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div style={{ backgroundColor: "#0E6548" }}>

            {/* details for upper of navbar  color code - #0E6548*/}
            <div style={{
                display: "flex",
                justifyContent: "right",
                gap: "10px",
                color: "white",
                backgroundColor: "#0E6548",
                fontFamily: "Open Sans,sans-serif,Arial,Helvetica",


            }} >
                Save $50 with App
                <Menu>
                    <MenuButton  >
                        Language
                    </MenuButton>
                    <MenuList color="black">
                        <MenuItem>Spanish</MenuItem>
                        <MenuItem>English</MenuItem>
                        <MenuItem>Russian</MenuItem>
                        <MenuItem>Japanese</MenuItem>
                        <MenuItem>Turkish</MenuItem>
                        <MenuItem>Vietnamese</MenuItem>
                        <MenuItem>Korean</MenuItem>
                        <MenuItem>Burmese</MenuItem>
                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton  >
                        Support Center
                    </MenuButton>
                    <MenuList color="black">
                        <MenuItem>Live Chat</MenuItem>
                        <MenuItem>Ticket</MenuItem>
                        <MenuItem>Help Center</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <hr />
            <Container maxW="6xl" backgroundColor="#0E6548" marginTop="15px">
                <Box backgroundColor="#0E6548" px={4} >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box>
                            <Image src={img1} width="95px" height="85px" />
                        </Box>
                        <div
                            style={{
                                width: "70%",
                                height: "40px",
                                margin: "auto",
                                alignItems: "center",
                                padding: "0px 8px",
                                display: "flex",
                                justifyContent: "space-around"
                            }}
                        >
                            <input
                                placeholder="    Search by keywords"
                                type="text"

                                // onChange={handle}
                                style={{ width: "90%", height: "40px", borderRadius: "5px" }}
                            />
                            <div style={{ color: "white", cursor: "pointer" }}><BsSearch /></div>

                            {/* <img
        // onClick={search}
        src="https://cdn-icons-png.flaticon.com/512/8918/8918128.png"
        alt=""
        style={{ width: "30px", height: "30px" }}
      /> */}

                        </div>
                        <Flex alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>
                                <Button onClick={toggleColorMode} backgroundColor="#0E6548">
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={'img2'}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={'center'}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <p>Username</p>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem>Your Servers</MenuItem>
                                        <MenuItem>Account Settings</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Stack>
                        </Flex>
                    </Flex>
                </Box>
            </Container>
            <Container maxW='7xl' marginTop="10px" display="flex" justifyContent="space-between">
                
                <Menu >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} backgroundColor="#0E6548" color="white">
    Categories
  </MenuButton>
  <MenuList>
    <MenuItem>Local Warehouses</MenuItem>
    <MenuItem>Sports & Outdoors</MenuItem>
    <MenuItem>Smart Home & Garden</MenuItem>
    <MenuItem>Consumer Electronics</MenuItem>
    <MenuItem>Generator & Portable Power</MenuItem>
    <MenuItem>Computer,Tablet & Access..</MenuItem>
    <MenuItem>Toys & Hobbies</MenuItem>
    <MenuItem>Phone Accessories</MenuItem>
    <MenuItem>Automobiles & Motorcycles</MenuItem>
    <MenuItem>Security Systems</MenuItem>
  </MenuList>
</Menu>
<Text fontSize='md' fontWeight="medium" color="white"  marginTop="10px" >New</Text>
<Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >Bestselling</Text>
<Text fontSize='md'fontWeight="medium" color="white" marginTop="10px"  >Brand</Text>
<Text fontSize='md'fontWeight="medium" color="white" marginTop="10px" >Clearance</Text>
<Text fontSize='md'fontWeight="medium" color="white" marginTop="10px" >Deals</Text>
<Text fontSize='md'fontWeight="medium" color="white" marginTop="10px"  >Coupons</Text>
<Text fontSize='md'fontWeight="medium" color="white" marginTop="10px"  >App Only</Text>
<Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >WhatGeek</Text>


            </Container>

        </div>
    )
}

export default Navbar