import React, { useContext } from 'react';
import { IoBagOutline } from "react-icons/io5";
import styles from "./main.module.css";
import { VscHeart } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";

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
    Text,
    useToast,
    HStack,
    Center
} from '@chakra-ui/react';
import { BsSearch } from "react-icons/bs";
import img1 from "../Utils/Logo.png"
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import ic from "../Utils/icon1.gif"
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { userName, isAuth, logoutUser } = useContext(AuthContext);
    console.log(isAuth)
    const toast = useToast()
    console.log(userName)

    const LogOut_User = () => {

        console.log("LOGOUT IS RUNNUNG")
        toast({
            title: 'Logout User Successfull.',

            description: "Digi Shop",
            status: 'warning',
            duration: 3000,
            isClosable: true,
        })

        logoutUser()
    }



    return (
        <div style={{ backgroundColor: "#0E6548" }}>

            {/* details for upper of navbar  color code - #0E6548*/}
            <div style={{
                display: "flex",
                justifyContent: "right",
                gap: "10px",
                color: "black",
                backgroundColor: "#0E6548",
                fontFamily: "Open Sans,sans-serif,Arial,Helvetica",


            }} >

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
                <h1>|</h1>
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
                        <NavLink to="/">
                            <Box>
                                <Image src={img1} width="95px" height="85px" />
                            </Box>
                        </NavLink>
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
                            <NavLink to="/products">
                                <div style={{ color: "white", cursor: "pointer" }}><BsSearch /></div>
                            </NavLink>
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
                                                src={ic}
                                            />
                                        </Center>
                                        <br />
                                        <Center gap={4}>
                                            <Text>Welcome To Digi Shop</Text>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        
                                        
                                        <MenuItem>{!isAuth && (
                                        <NavLink
                                            id={styles.loginButton}

                                            to="/login"

                                            className={styles.LogoutHOver}
                                        >
                                            Login
                                        </NavLink>
                                    )}</MenuItem>
                                        
                                        <MenuItem><div>

{isAuth && (
    <HStack justifyContent="space-around" style={{ textAlign: "center" }} >
        <HStack justifyContent="space-around"  >
            <p>

                <FaUserAlt />
            </p>
            <div >

                <p style={{ fontWeight: "bold" }}>
                    {userName}
                </p>
            </div>
            <p >

            </p>

            <button
                onClick={LogOut_User}
                className={styles.LogoutHOver}
            >
                Logout
            </button>
        </HStack>


    </HStack>
)}
</div></MenuItem>
                                    </MenuList>
                                </Menu>
                                <HStack w={{ base: "full", md: "fit-content" }} p={2} justifyContent="space-around"   >



                                   

                                    

                                    <div>
                                        <p>
                                            <NavLink to="/wishlist"><VscHeart /></NavLink>

                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            <span style={{ display: "flex", alignContent: "center" }} >
                                                <NavLink to="/"><IoBagOutline /></NavLink>


                                            </span>
                                        </p>
                                    </div>
                                </HStack>
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
                    <NavLink to="/products">
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
                    </NavLink>
                </Menu>

                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >New</Text></Link>
                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >Bestselling</Text></Link>
                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px"  >Brand</Text></Link>
                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >Clearance</Text></Link>
                <Link to="/products">

                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >Deals</Text></Link>
                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px"  >Coupons</Text></Link>
                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px"  >App Only</Text></Link>
                <Link to="/products">
                    <Text fontSize='md' fontWeight="medium" color="white" marginTop="10px" >WhatGeek</Text></Link>


            </Container>

        </div>
    )
}

export default Navbar