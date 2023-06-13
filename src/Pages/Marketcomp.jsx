import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SellGetdatafn } from '../Redux/EventsReducer/action'

const Marketcomp = () => {
    const products = useSelector((state)=>state.Reducer.EventData)

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(SellGetdatafn())
},[dispatch,products.length])

console.log(products)
  return (
    <Box w={"90%"} m="auto" mt="20px" >

<SimpleGrid columns={[1, 2, 3]} spacing='40px'>
  
    {
      products.length>0 && products.map((el)=>{
        return <Box bg="#90CDF4"  textAlign={"left"}  borderRadius={"10px"} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  >
          <Image src={el.productimg} h="300px" w="100%"  />
          <Text>Product Name : {el.productname}</Text>
          <Text> Type : {el.producttype}</Text>
          <Text> Price : {el.price}</Text>
          <Text> Make: {el.company}</Text>
          <Text> Purchase Year: {el.Year_of_Purchase}</Text>
          <Button>Sell</Button>
          

        </Box>
      })
    }
 
  
</SimpleGrid>
    </Box>
  )
}

export default Marketcomp