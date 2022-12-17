import React, { useState } from 'react'
import { Container, Image, Box, Heading, Grid, GridItem, Text, CardBody, Card, Stack} from '@chakra-ui/react'
import sa from "../Utils/sale.jpg";
import Snowfall from 'react-snowfall'
// import bg from "../Utils/back.jpg";
import Carousel from '../Components/Carousel';
import { Link, NavLink } from 'react-router-dom';
import Loading from '../Components/Loading';

// style={{ backgroundImage: `url(${bg})` , opacity: "1"}}

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false)
         
        }, 1000);
         
        if(isLoading){

            return (  
               <Loading />
              ) 
          
           }
    return (
        <div >

            <Snowfall style={{
                position: "fixed",
                width: "100vw",
                height: "100vh"
            }}
                snowflakeCount={180}

            />
            <Box  >
                <Image src={sa} />
            </Box>
            <Container maxW="7xl" >
                {/* #B40325 for theme of christmas  */}
                <Heading marginTop="20px" color="#B40325" >Deal of the Day</Heading>
                <NavLink to="/products">
                <Container maxW='6xl' marginTop="20px">
                    <Grid templateColumns='repeat(8, 1fr)' gap={6} >
                        <GridItem w='90%'  ><Image src="https://img.gkbcdn.com/p/2022-08-01/ANBERNIC-RG353P-Portable-Game-Console-32GB-eMMC-16GB-64G-TF-Card-Black-510360-0._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >16% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹10818.62</Text></GridItem>
                        <GridItem w='90%'  ><Image src="https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >13% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹1689.70</Text></GridItem>
                        <GridItem w='90%'   ><Image src="https://img.gkbcdn.com/p/2022-11-30/AOSIMAN-140FCC-Portable-14-Inch-Monitor-with-Stand-EU-518474-0._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >19% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹9297.14</Text></GridItem>
                        <GridItem w='90%'   ><Image src="https://img.gkbcdn.com/p/2020-03-13/xiaomi-smart4u-sh50-bicycle-smart-flash-helmet-black-1584081277206._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >33% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹3971.93</Text></GridItem>
                        <GridItem w='90%'  ><Image src="https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >21% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹2788.44</Text></GridItem>
                        <GridItem w='90%'  ><Image src="https://img.gkbcdn.com/p/2022-05-19/X98Q-TV-BOX-Amlogic-S905W2-2G-RAM-16G-ROM-5G-WiFi-AV1-4K-EU-Plug-501127-0._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >28% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹2450.44</Text></GridItem>
                        <GridItem w='90%'  ><Image src="https://img.gkbcdn.com/p/2019-11-15/mifo-o7-bluetooth-5-0-tws-qualcomm-qcc3020-earphones-black-1574132882676._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >38% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹8451.86</Text></GridItem>
                        <GridItem w='90%'  ><Image src="https://img.gkbcdn.com/p/2021-10-29/P400-Bluetooth-5-2-TWS-Earbuds-475334-3._w280_p1_.jpg" />
                            <Text fontSize='xs' backgroundColor="red" color="black" >33% OFF</Text><Text fontSize='md' fontWeight="bold" align="left">₹1689.70</Text></GridItem>

                    </Grid>
                </Container></NavLink>
                <Heading marginTop="30px" color="#B40325" >Trending Categories</Heading>
                <Container maxW='7xl' marginTop="30px">
                    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' align="left">Smart Home & Garden</Heading>
                                    <Text align="left">
                                        Smart Cleaning robots and vacuums ,living room furniture ,
                                        patio & garden supllies ,upto 60% off!
                                    </Text>

                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/bn/2212/488x274-63998a412b40c92ac0082d77._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' align="left">E-transport</Heading>
                                    <Text align="left">
                                        New e-riders for less.Skip gas prices with electric bikes scooters & beyond
                                    </Text>

                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3' >
                                    <Heading size='md' align="left">3D Printers</Heading>
                                    <Text align="left">
                                        3D Printers allows you to bring digitally modeled designs to
                                        life by using highly detailed
                                    </Text>

                                </Stack>
                            </CardBody>


                        </Card></GridItem>

                    </Grid>
                </Container>
                <Heading marginTop="30px" color="#B40325" >New For You</Heading>
                <Link to="/products">
                <Container maxW='7xl' backgroundColor="#fff" marginTop="20px">
                    <Card >
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/bn/2212/300x380-638d8ff32b40c93c747240ee._p1_.jpg" /></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-12-13/OneModern-M8-PSSD-Hardware-Fingerprint-Hard-Encryption-2TB-518752-0._w280_p1_.jpg" /><Text fontSize='sm' align="left">Onemodern M8 PSSD High-speed Hardware Fingerprint Hard</Text><Text fontSize='sm' fontWeight="bold" >₹15383.09</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-11-04/Q26-Pro-Smartwatch-1-83---TFT-Screen-Black-518108-0._w280_p1_.jpg" /><Text fontSize='sm' align="left">Q26 Pro Smartwatch 1.83'' TFT Screen BT5.0 Sports Bracelet 24</Text><Text fontSize='sm' fontWeight="bold">₹1689.70</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-12-13/ZLL-SG906-MINI-SE-RC-Drone-5G-WiFi-FPV-GPS-with-4K-Three-Batteries-518746-0._w280_p1_.jpg" /><Text fontSize='sm' align="left">Zll SG906 MINi SE RC Drone 5G Wifi FPV GPS with 4K HD ESC Camera</Text><Text fontSize='sm' fontWeight="bold">₹15890.25</Text></GridItem>

                        </Grid>
                    </Card>
                </Container></Link>
                <Heading marginTop="30px" color="#B40325" >Enjoy Life</Heading>
                <Container maxW='5xl' marginTop="30px">
                    <Grid
                        templateColumns='repeat(4, 1fr)'
                        gap={6}
                    >

                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2212/5-639696402b40c948ec525e98._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">Top Tech Gifts</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2212/2-639697862b40c948ec525e99._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">Get in 5 Days</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2212/3-639695772b40c948ec525e96._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">Christmas Tress</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2212/4-639696002b40c948ec525e97._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">Holiday Decors</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2212/6-63969a2d2b40c948ec2b7046._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">For Adults</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2212/7-63969a472b40c948ec2b7047._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">For kids</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2209/210x2105-633272852b40c9222cacb30a._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">Game Consoles</Text></GridItem>
                        <GridItem w='100%' ><Image src="https://img.gkbcdn.com/bn/2209/210x2104-633272352b40c9222cacb309._p1_.jpg" /><Text fontSize='sm' align="left" fontWeight="bold">Party Speakers</Text></GridItem>

                    </Grid>
                </Container>
                <Heading marginTop="30px" color="#B40325" >Best Sellers</Heading>
                <NavLink to="/products">
                <Container maxW='7xl' marginTop="30px">
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2022-11-11/tronsmart-onyx-ace-pro-bluetooth-5-2-tws-earphones-white-965936-1668131039073._w280_p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >25% OFF</Text>
                                    <Text align="left">
                                        Tronsmart Onyx Ace Pro TWS Earbuds, Qualcomm QCC3040,
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >13% OFF</Text>
                                    <Text align="left">
                                        3.7V 108 Lamp Beads Three-head Solar Split Wall Lamp Three-speed
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹1689.70</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2018-12-28/sg106-1080p-wifi-fpv-rc-drone-rtf-black-1574132216240._w280_p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3' >
                                    <Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >17% OFF</Text>
                                    <Text align="left">
                                        ZLL SG106 Wifi FPV RC Drone with 1080P HD Camera Optical Flow
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹4225.91</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2021-06-05/GameSir-G4-Pro-Bluetooth-2-4G-Wireless-Gamepad-459923-4._w280_p1_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >8% OFF</Text>
                                    <Text align="left">
                                        GameSir G4 Pro Bluetooth 2.4G Wireless Gamepad for Nintendo
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹5070.78</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>

                    </Grid>
                </Container></NavLink>
                <Heading marginTop="30px" color="#B40325" >Popular Brands</Heading>
                <Container maxW='6xl' marginTop="30px">
                   <Carousel />
                   <Container maxW='7xl' backgroundColor="#fff" marginTop="100px">
                    <Card >
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem  marginTop="65px" ><Image src="https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg" /></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-05-12/Sculpfun-S10-Laser-Engraver-500429-0._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >39% OFF</Text><Text  align="left">SCULPFUN S9 5.5W Laser Engraver, 0.06mm Ultra-</Text><Text fontSize='lg' fontWeight="bold" align="left">₹20709.14</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-09-23/SCULPFUN-S30-5W-Laser-Engraver-Cutter-517195-0._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >43% OFF</Text><Text  align="left">SCULPFUN S10 10W Laser Engraver Cutter, 0.08mm</Text><Text fontSize='lg' fontWeight="bold" align="left">₹33726.31</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-11-17/sculpfun-s30-pro-10w-laser-engraver-cutter-bb13fa-1668667552852._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >15% OFF</Text><Text  align="left">SCULPFUN S30 5W Laser Engraver Cutter,</Text><Text fontSize='lg' fontWeight="bold" align="left">₹40488</Text></GridItem>

                        </Grid>
                    </Card>
                </Container>
                <Container maxW='7xl' backgroundColor="#fff" marginTop="20px">
                    <Card >
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem w='100%' marginTop="65px" ><Image src="https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg" /></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >38% OFF</Text><Text  align="left">Tronsmart T6 Plus Upgraded Edition Output,</Text><Text fontSize='lg' fontWeight="bold" align="left" >₹4217.90</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-06-28/Tronsmart--T7-507089-0._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >27% OFF</Text><Text  align="left">Tronsmart Force X 60W Portable Outdoor</Text><Text fontSize='lg' fontWeight="bold" align="left">₹3633.82</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-10-15/Tronsmart-Bang-SE-Bluetooth-Party-Speaker-517893-0._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >14% OFF</Text><Text  align="left">Tronsmart T7 Portable Bluetooth Speaker with LED Lights, 30W </Text><Text fontSize='lg' fontWeight="bold" align="left">₹5784.19</Text></GridItem>

                        </Grid>
                    </Card>
                </Container>
                <Container maxW='7xl' backgroundColor="#fff" marginTop="20px">
                    <Card >
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem w='100%' marginTop="65px" ><Image src="https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg" /></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-03-02/creality-ender-3-s1-pro-3d-printer-c9e30b-1646215071933._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >15% OFF</Text><Text  align="left">Creality Ender-3 S1 Pro 3D Printer, Sprite Full Metal</Text><Text fontSize='lg' fontWeight="bold" align="left">₹40004.99</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-07-06/Creality-Ender-3-Max-Neo-3D-Printer-507593-0._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >16% OFF</Text><Text  align="left">Creality Ender-3 Max Neo 3D Printer, CR Touch</Text><Text fontSize='lg' fontWeight="bold" align="left">₹26964.14</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-10-31/creality-ender-3-s1-3d-printer-303cda-1667202443810._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >15% OFF</Text><Text  align="left">Creality Ender-5 S1 3D Printer, 250mm/s, Sprite</Text><Text fontSize='lg' fontWeight="bold" align="left">₹25020.02</Text></GridItem>

                        </Grid>
                    </Card>
                </Container>
                <Container maxW='7xl' backgroundColor="#fff" marginTop="20px">
                    <Card >
                        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                            <GridItem w='100%' marginTop="65px" ><Image src="https://img.gkbcdn.com/bb/roborock-20221007152405384._p1_.jpg" /></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2022-06-25/Roborock-S7-Pro-Ultra-Robot-Vacuum-Cleaner-White-506889-2._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >34% OFF</Text><Text  align="left">Roborock S7 Pro Ultra Robot Vacuum Cleaner</Text><Text fontSize='lg' fontWeight="bold" align="left">₹83504.32</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2021-03-01/roborock-s7-robot-vacuum-cleaner-2500pa-powerful-suction-1614568841892._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >40% OFF</Text><Text  align="left">Roborock S7 Robot Vacuum Cleaner with</Text><Text fontSize='lg' fontWeight="bold" align="left">₹33861.21</Text></GridItem>
                            <GridItem w='100%'><Image src="https://img.gkbcdn.com/p/2021-07-07/Roborock-Auto-Empty-Dock-automatic-suction-station-for-Roborock-s7-461162-0._w280_p1_.jpg" /><Text fontSize='xs' backgroundColor="red" color="black" borderRadius="0px 10px" >39% OFF</Text><Text  align="left">Roborock S7 Robot Vacuum Cleaner with</Text><Text fontSize='lg' fontWeight="bold" align="left">₹21130.93</Text></GridItem>

                        </Grid>
                    </Card>
                </Container>
                </Container>
                <Heading marginTop="30px" color="#B40325" >Recommended For You</Heading>
                <NavLink to="/products">
                <Container maxW='7xl' marginTop="30px">
                    <Grid templateColumns='repeat(8, 1fr)' gap={2}>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2022-11-18/H96-MAX-3318-RK3318-Android-9-0-2GB-16GB-4K-TV-Box-518304-0._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    
                                    <Text align="left">
                                    H96 MAX-3318 Android 9.0 TV BOX 
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2022-11-18/Mibro-GS-Smartwatch-GPS-Sports-Watch-518306-0._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    
                                    <Text align="left">
                                    Mibro GS Smartwatch GPS
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2019-11-16/i100000-pro1-bluetooth-5-0-tws-earphones-used-independently-1574132876970._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3' >
                                    
                                    <Text align="left">
                                    Apods P300 Bluetooth 5.0 TWS
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2019-08-16/apods-i888-tws-earphones-1571990834059._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    
                                    <Text align="left">
                                    Apods i80 Bluetooth 5.0 TWS 
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2022-05-11/ALLDOCUBE-iWork-20-Pro-Tablet--PC-with-Keyboard-US-Plug-500407-0._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                   
                                    <Text align="left">
                                    ALLDOCUBE iWork 20 Pro Tablet PC
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2020-05-22/ALLDOCUBE-KNote-8-Tablet-PC-13-3--M3-6Y30-8GB-256GB-Gray-904769-._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    
                                    <Text align="left">
                                    ALLDOCUBE KNote 8 Youth Edition
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2022-07-27/Jumper-EZbook-X1S-2-in-1-Tablet-Intel-Gemini-Lake-N4000-509273-0._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    
                                    <Text align="left">
                                    Jumper EZbook X1S 2 in 1 Tablet
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>
                        <GridItem w='100%' ><Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://img.gkbcdn.com/p/2020-05-22/ALLDOCUBE-KNote5-Pro-Tablet-PC-11-6--Gemini-Lake-N4000-6GB-128GB-Black-904761-._w280_.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    
                                    <Text align="left">
                                    ALLDOCUBE KNote 5 Pro Tablet PC Intel
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" align="left">₹2534.97</Text>
                                </Stack>
                            </CardBody>


                        </Card></GridItem>

                    </Grid>
                </Container></NavLink>
            </Container>
        </div>
    )
}

export default HomePage

