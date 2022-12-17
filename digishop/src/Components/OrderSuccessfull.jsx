import { Button, Container, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


const OrderSuccessfull = () => {



  const navigate = useNavigate();
  

  return (
    <div>
      <Container maxW={'7xl'}>
  
  
  <Image src="https://img.gkbcdn.com/s3/bn/2212/1500x125-6398257f2b40c93b1474bd0c.jpg" marginTop="20px" />
  </Container>
      <VStack margin="auto"  style={{marginTop:"50px", marginBottom:"80px",}} >
        <div>
          <img 
          
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>
       
        <Button width="50%"  style={{marginTop:"20px"}}  onClick={()=>navigate("/")} fontSize="x" padding={3} w="50%" bgColor='#06f' color="white"> CONTINUE SHOPPING  </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
