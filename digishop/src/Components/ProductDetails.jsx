import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Badge,
    GridItem,
    Card,
    CardBody,
    Grid
        } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';




export default function ProductDetails() {
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        axios.get(`https://di.onrender.com/products/${id}`).then(({ data }) => {
            setProduct(data)
        }).catch((err) => console.log(err))
    }, [id])

    const { image, description, category, title, price } = product;


    return (
        <Container maxW={'7xl'} align="left">
            <Image src="https://img.gkbcdn.com/s3/bn/2212/1500x125-6398257f2b40c93b1474bd0c.jpg" marginTop="20px" />
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={image}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
                            align="left">
                            {title}
                        </Heading>
                        {/* <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                
                
                alignText="left">
                {price}
              </Text> */}
                        <Text align="left"> ⭐⭐⭐⭐⭐</Text>

                        <Text align="left" fontSize="xl" fontWeight="bold">₹{price}</Text>

                    </Box>


                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        <VStack spacing={{ base: 4, sm: 6 }} >
                            <Text
                                color={useColorModeValue('gray.500', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}
                            >
                                {/* {rating.rate} */}
                                <Badge colorScheme='blue'  >2% off New User (Coupon)</Badge>
                                <hr />
                            </Text>
                            <Text fontSize={'lg'} align="left">
                                <Text fontSize="xl" fontWeight="bold">Category: ({category}) </Text>
                                {description}
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color="#06f"
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} align="left">
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color="#06f"
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}
                            >
                                Product Details
                            </Text>

                            <List spacing={2} align="left">
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Between lugs:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Bracelet:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case:
                                    </Text>{' '}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case diameter:
                                    </Text>{' '}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Dial color:
                                    </Text>{' '}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Crystal:
                                    </Text>{' '}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                    treatment inside
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Water resistance:
                                    </Text>{' '}
                                    5 bar (50 metres / 167 feet){' '}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                    <Link to={`/cart/${id}`}>
                        <Button
                            rounded={'none'}
                            //   disabled={itemAlreadyExists(product.id,state)}
                            //   onClick={()=>dispatch(addToCart(product))}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg="#06f"
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Add to cart
                        </Button>
                    </Link>
                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <MdLocalShipping />
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
            <Heading color="gray.400">You May Also Like...</Heading>
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

            </Container>
        </Container>
    );
}