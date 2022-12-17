import { Container,Spinner } from "@chakra-ui/react";
import React from "react";

// import loading from "../Utils/load.gif"

const Loading = () => {
  return (
   
    <Container justifyContent="center">
 {/* <Image src={loading} width="150px" height="100px" /> */}
 <Spinner size='xl' />
    </Container>
    

  );



};

export default Loading;
