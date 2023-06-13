import { Box, Button, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SellPostdatafn } from '../Redux/EventsReducer/action'
import Marketcomp from './Marketcomp'

const MarketPlace = () => {
  const dispatch = useDispatch()


  const initial= {
    "productimg":"",
    "productname":"",
    "producttype":"",
    "price":"",
    "company":"",
    "Year_of_Purchase":""
  }
  
  const [formdata,setFormdata]=useState(initial)
  
  
  const Handlechange=(e)=>{
  const {name,value} = e.target
  
  setFormdata({...formdata,[name]:value})
 
  }
  
  const Handlesubmit=(e)=>{
  e.preventDefault()
  console.log(formdata)
dispatch(SellPostdatafn(formdata))
setFormdata("")
  }
  
  const {productimg,productname,producttype,price,company,Year_of_Purchase} =formdata
  
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={"6xl"} color={"#C4F1F9"}  bg={"#0BC5EA"} >Market Place</Text>
    
    <Marketcomp/>
      <Box bg='#ED8936' height='auto' w={["100%","100%","40%"]} m="auto" mt="30px">
  <Text fontSize={'6xl'} color={"Teal"} >Buy and sell Product</Text>
 

  <FormControl bg='#F6AD55'>

<FormLabel  textAlign={"center"} >Images</FormLabel>
<Input type='text' placeholder='Images Url' color={"#FED7D7"} w="70%" textColor={"red"}
name="productimg" value={productimg}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Product Name</FormLabel>
<Input  type='text' placeholder='Product Name' color={"#FED7D7"} w="70%" 
name="productname" value={productname} onChange={Handlechange}  />



<FormLabel  textAlign={"center"} >Price</FormLabel>
<Input  type='number' placeholder='Price' color={"#FED7D7"} w="70%" 
name="price" value={price}  onChange={Handlechange} />



<FormLabel  textAlign={"center"} >Company</FormLabel>
<Input  type='text' placeholder='Company' color={"#FED7D7"} w="70%" 
name="company" value={company}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Product Type</FormLabel>
<Select placeholder='Product Type'  color={"black"} w="70%" m="auto" bg='#ED8936'
 onChange={Handlechange}  name="producttype" >
  <option value='Electronics'>Electronics</option>
  <option value='Cloths'>Cloths</option>
  <option value='Cosmetics'>Cosmetics</option>
</Select>


<FormLabel  textAlign={"center"} >Year Of MANUFACTURE</FormLabel>
<Input  type='number' placeholder='Year Of MANUFACTURE' color={"#FED7D7"} w="70%" 
name="Year_of_Purchase" value={Year_of_Purchase}  onChange={Handlechange} />



</FormControl>
<br/>
<br/>
<Button onClick={Handlesubmit} bg={"blue.400"} >Add For Selling</Button>
  </Box>
    
    
    </Box>
  )
}

export default MarketPlace