import React from 'react';
import axios from "axios"
import { useState, useEffect } from 'react';
import { Button, Card, CardBody, Checkbox, Container,  Grid, GridItem, Select,  Text } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import Loading from '../Components/Loading';
// import Pagination from '../Components/Pagination';


// const getData = async ({page=1,sortBy="asc"})=>{
//   return axios.get(`https://di.onrender.com/products?page=${page}&orderBy=${sortBy}&limit=10`
//   )
// }


const ProductPage = () => {

  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
 
  // const [sortBy,setSortBy] = useState("asc");
  
 

  setTimeout(()=>{
    setLoading(false)
  },2500)

  // useEffect(()=>{
  //   setLoading(true)
  //   getData({
  //     page,
  //     sortBy
  //   })
  //   .then(res=>{
  //     setData(res.data)
  //     setLoading(false)
  //     setTotalPages(res.totalPages)
  //   })
  //   .catch((err)=>{
  //     setError(true)
  //   })
  // },[page,sortBy])
  // console.log(data)

  useEffect(() => {
    axios.get(`https://di.onrender.com/products`).then((res) => {
      console.log(res);
      setData(res.data)
    })
  }, [])
  console.log(data)


  
  

  if(loading){

    return (  
       <Loading />
      ) 
  
   }


  return (
    <div >
      <Container maxW='4xl' align="left" marginTop="20px">
      <Card>
  <CardBody>
  <Text fontSize="md">New Arrived : <Button border="1px solid blue" backgroundColor="white" >7 days</Button> <Button backgroundColor="white" >15 days</Button> <Button backgroundColor="white" >30 days</Button> </Text>
  <br/>
  
  <Text fontSize="md" >Filter : <Checkbox colorScheme='blue' defaultChecked >
    On Sale
  </Checkbox> <Checkbox colorScheme='blue' defaultChecked>
    Free shipping only
  </Checkbox></Text>
  <br/>
  <Text fontSize="md">Sort By :  <Button border="1px solid blue" backgroundColor="white" >Best Match</Button> <Button backgroundColor="white" >New Arrival</Button> <Button backgroundColor="white" >Price : <Select placeholder='Price'>
 
  <option value='option2' >High to Low</option>
  <option value='option3'  >Low to high</option>
</Select></Button> </Text>
  </CardBody>
</Card>
     
      </Container>
      <Container maxW='4xl' marginTop="30px" >
        <Grid templateColumns="repeat(4,1fr)" gap={6} >
          {data?.length > 0 &&
            data.map((e) => {
              return (

                <GridItem key={e.id}>
                  <ProductCard
                    category={e.category}
                    image={e.image}
                    id={e.id}
                    description={e.description}
                    title={e.title}
                    price={e.price}
                    rating={e.rating.rate}
                    count={e.rating.count}
                  />
                </GridItem>
              )
            })
          }
        </Grid>
        </Container>
    </div>
  )
}

export default ProductPage