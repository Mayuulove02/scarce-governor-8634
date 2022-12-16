import {
   
    Text,
    Stack,
    Image,
    
    CardBody,
    Card,
    
    Flex,

} from '@chakra-ui/react';
import { Link } from "react-router-dom"



export default function ProductCard({ image, id, description, title, price, rating, count, rate }) {
    return (
        //   <Center py={12}>
        //      <Link to={`/products/${id}`}>
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
        //           Show more....
        //         </Heading>
        //         <Stack direction={'row'} align={'center'}>
        //           <Text fontWeight={800} fontSize={'xl'}>
        //             Price:₹{price}
        //           </Text>
        //           <Text textDecoration={'line-through'} color={'gray.600'}>
        //             $199
        //           </Text>
        //         </Stack>
        //         <Text color={"gray.600"}>Rating :{rating}</Text>
        //         <Text color={"gray.600"}>Rating :{count}</Text>
        //       </Stack>
        //     </Box>
        //     </Link>
        //   </Center>

        <div>


<Link to={`/products/${id}`}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'

                    />
                    <Stack mt='6' spacing='3'>
                        
                        <Text align="left">
                            {title}
                        </Text>
                        <Flex gap={10}>
                        <Text fontSize="lg" fontWeight="bold" align="left">₹{price}</Text>
                        
                        <Text fontSize="lg" align="left">♡ {rating}</Text>
                        </Flex>
                    </Stack>
                </CardBody>

            </Card>
            </Link>
        </div>

    );
}