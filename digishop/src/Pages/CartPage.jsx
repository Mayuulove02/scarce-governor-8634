import {
    Box,
    
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Button,
    
    Tooltip,
    Icon,
    
    CardFooter,
    Divider,
    Card,
    CardBody,
    Container,
  } from '@chakra-ui/react';
import axios from 'axios';
import {  useEffect,  useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';
  
  
  
  export default function CartPage() {
    const [cart ,setCart] = useState({})
    const {id} = useParams();
    const [count,setCount] = useState(1)

    // const {state ,dispatch} = useContext(CartContext);
    // const cancelRef =useRef();


    useEffect(()=>{
       axios.get(`https://di.onrender.com/products/${id}`).then(({data})=>{
        setCart(data);
       })
    },[id])

    const {image,price ,title} = cart;

    const handleAdd =()=>{
        setCount(count+1)
    }

    const handleSub =()=>{
        setCount(count-1)
    }


    return (
    //   <Center py={12}>
    //     <Box
    //       role={'group'}
    //       p={6}
    //       maxW={'330px'}
    //       w={'full'}
    //       bg={useColorModeValue('white', 'gray.800')}
    //       boxShadow={'2xl'}
    //       rounded={'lg'}
    //       pos={'relative'}
    //       zIndex={1}>
    //       <Box
    //         rounded={'lg'}
    //         mt={-12}
    //         pos={'relative'}
    //         height={'230px'}
    //         _after={{
    //           transition: 'all .3s ease',
    //           content: '""',
    //           w: 'full',
    //           h: 'full',
    //           pos: 'absolute',
    //           top: 5,
    //           left: 0,
              
    //           filter: 'blur(15px)',
    //           zIndex: -1,
    //         }}
    //         _groupHover={{
    //           _after: {
    //             filter: 'blur(20px)',
    //           },
    //         }}>
    //         <Image
    //           rounded={'lg'}
    //           height={230}
    //           width={282}
    //           objectFit={'cover'}
    //           src={image}
    //         />
    //       </Box>
    //       <Stack pt={10} align={'center'}>
    //         <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
    //           {title}
    //         </Text>
    //         <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
    //           Nice Chair, pink
    //         </Heading>
    //         <Stack direction={'row'} align={'center'}>
    //           <Text fontWeight={800} fontSize={'xl'}>
    //             {price}
    //           </Text>

    //         <Flex>
    //             <Button disabled={count===1} onClick={()=>handleSub(-1)}>-</Button>
    //             <Text>{count}</Text>
    //             <Button onClick={()=>handleAdd(1)}>+</Button>
    //         </Flex>
    //         <Text>
    //             Total: {Math.floor(count * price)}
    //         </Text>
            
    //          <Link to="/check">
    //          <Button >Place Order</Button></Link>


              
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Center>
    <div>
        <Container maxW={'7xl'}>
  
  
    <Image src="https://img.gkbcdn.com/s3/bn/2212/1500x125-6398257f2b40c93b1474bd0c.jpg" marginTop="20px" />
    </Container>
    <Flex p={50} w="full" alignItems="center" justifyContent="center " gap={4}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        
          
        

        <Image
          src={image}
          alt={title}
          roundedTop="lg"
        />

        <Box p="6">
          
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {title}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
           
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
              ₹
              </Box>
              {price}
            </Box>
           
          </Flex>
          <Flex marginTop="10px" justifyContent='center' margin="center" >
          <Button disabled={count===1} onClick={()=>handleSub(-1)}>-</Button>
           <Button padding="10px 40px 10px 40px">{count}</Button>
              <Button onClick={()=>handleAdd(1)}>+</Button>
              </Flex>
        </Box>
      </Box>
      <Card maxW='sm'>
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Order Summary</Heading>
      <Text>
       <Flex gap={10}>
        <Text>Price :-</Text>
        <Text>₹ {price}</Text>
       </Flex>
       <hr/>
       <br/>
       <Flex gap={10}>
        <Text>Quantity :-</Text>
        <Text>* {count}</Text>
        </Flex>
        <hr/>
        <br/>
       <Flex gap={10}>
       <Text>Delivery Charges :-</Text>
        <Text>Free</Text>
       </Flex>
       <hr/>
        <br/>
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Text fontSize="xl" >Total Bill = ₹ {Math.floor(count * price)}</Text>
  </CardFooter>
</Card>
    </Flex>
    
    </div>
    );
  }