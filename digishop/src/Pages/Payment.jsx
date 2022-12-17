import {  Button, Divider, FormControl, useToast,FormLabel, HStack, Image, Input, PinInput, PinInputField, Stack, Text, VStack,  Container } from "@chakra-ui/react";
import { useState } from "react";


import {   useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";



export default function Payment() {

  const toast = useToast()
  const navigate = useNavigate()
  const handlePayment = () => {
    window.confirm("Are you Sure!!");
    setTimeout(() => {
      alert("Your order is confirmed !!");
    }, 2000);
    setTimeout(() => {
      alert("THANKS FOR SHOPPING");
      toast({
        title: 'Payment Successfull.',
      
        
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate("/checkout")
    }, 2000);
    
  };
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
    <>
      <Container maxW={'7xl'}>
  
  
  <Image src="https://img.gkbcdn.com/s3/bn/2212/1500x125-6398257f2b40c93b1474bd0c.jpg" marginTop="20px" />
  </Container>
      <VStack padding={5} spacing={5}  w={{base:"full", md:"1200px"}} margin="auto"  style={{marginTop:"50px"}} marginBottom="50px">

<Text fontWeight="bold" fontSize="xl"  >Choose your payment method</Text>

<Stack direction={{base:"column", md:"row"}} spacing={5}  >

   <VStack   align="flex-start" padding={5}  bg="#eeeeee"
   >

    <HStack  >
        <Image w={25} src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
        <Text>Debit/Credit Card</Text>
    </HStack>
    
    <Divider/>

    
    <HStack>
        <Image w={25} src="https://images.bewakoof.com/web/Group-1645705428.png" />
        <Text>WALLET</Text>
    </HStack>
    
    <Divider/>
    <HStack>
        <Image w={25} src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
        <Text>UPI</Text>
    </HStack>
    
    <Divider/>
    <HStack>
        <Image w={25} src="https://images.bewakoof.com/web/nb-icon-1645705428.png" />
        <Text>NET BANKING</Text>
    </HStack>
    
    <Divider/>
    <HStack>
        <Image w={25} src="https://images.bewakoof.com/web/cod-icon-1645705427.png" />
        <Text>CASH ON DELIVERY</Text>
    </HStack>
    
    <Divider/>


    </VStack>





    <VStack align="flex-start" spacing={5} padding={5}  >
     
   
     <VStack>
     <HStack>
     <FormControl  >
       <FormLabel>First Name</FormLabel>
       <Input size="sm" />
     
     </FormControl>
     <FormControl  >
       <FormLabel>Last Name</FormLabel>
       <Input size="sm" />
       
     </FormControl>
     </HStack>

     <FormControl  >
       <FormLabel>Address</FormLabel>
       <Input size="sm" />
      
     </FormControl>

     <HStack>
     <FormControl  >
       <FormLabel>City</FormLabel>
       <Input size="sm" />
     
     </FormControl>
     <FormControl  >
       <FormLabel>State</FormLabel>
       <Input type="city" size="sm" />
       
     </FormControl>
     </HStack>
     </VStack>

      
     <Divider/>
       
    <VStack>

        <HStack width="full" >
         <FormControl  >
           <FormLabel>Card Number</FormLabel>
           <Input  size="sm" />
         
         </FormControl>

         <FormControl >
           <FormLabel>CVV</FormLabel>
           <HStack width="full" >

         <PinInput size="sm">
           <PinInputField />
           <PinInputField />
           <PinInputField />
         </PinInput>
       </HStack>
           
         </FormControl>

         
         </HStack>

         <HStack>
     <FormControl  >
       <FormLabel>Exp MOnth</FormLabel>
       <Input size="sm" />
     
     </FormControl>
     <FormControl  >
       <FormLabel>Exp Year</FormLabel>
       <Input size="sm" />
       
     </FormControl>
     </HStack>
    
     <Button style={{marginTop:"20px"}}  onClick={handlePayment} fontSize="x" padding={3} w="full" bgColor='#06f' color="white" > PAY  </Button>
    

       
    </VStack>



                  
    


     
     
     </VStack>
     


</Stack>


</VStack>
    </>
  );
}