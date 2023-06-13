import { Box, Button, FormControl, FormLabel, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sliding from '../Sliders/Carausel'
import { IGetdatafn, IPostdatafn } from '../Redux/EventsReducer/action'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const EventPost = useSelector((state)=>state.Reducer.EventData)
console.log(EventPost)

const initial= {
  "imgurls":"",
  "Post":"",
  "Place":"",
  "time":"",
  "date":""
  
}
useEffect(()=>{

  
  dispatch(IGetdatafn())
  
  
  },[dispatch,EventPost.length])

const [formdata,setFormdata]=useState(initial)


const Handlechange=(e)=>{
const {name,value} = e.target

setFormdata({...formdata,[name]:value})

}

const Handlesubmit=(e)=>{
e.preventDefault()
console.log(formdata)
dispatch(IPostdatafn(formdata))

}

const {imgurls,Post,Place,time,date} =formdata





  return (
    <div>
  
<Sliding/>
<Box>
<Box  w="95%" m="auto" marginTop="20px" >
<Text  fontSize={"6xl"} color={"#FBB6CE"} bg={"#ED64A6"} >Event Hppening Around the world</Text>
<SimpleGrid columns={[1, 2, 3]} spacing='40px' mt="20px">
  
    {
      EventPost.length>0 && EventPost.map((el)=>{
        return <Box bg="#90CDF4"  textAlign={"left"} 
        boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        borderRadius={"10px"}
        >
          <Image src={el.imgurls} w="100%"  />
          <Text>Event Name : {el.Post}</Text>
          <Text> Description : {el.Place}</Text>
          <Text> Date : {el.date}</Text>
          <Text> Time: {el.time}</Text>
          
          

        </Box>
      })
    }
 
  
</SimpleGrid>

<Box  h="850px"w={["100%","100%","30%"]}  ml={["00px","00px","900px"]} mt="100px" >
<Text fontSize={"20px"} fontWeight={"bold"}  >ADD EVENTS</Text>
<FormControl bg='#F6AD55' h="400px" >

<FormLabel  textAlign={"center"} >Images</FormLabel>
<Input type='text' placeholder='Images Url' color={"#FED7D7"} w="70%" textColor={"red"}
name="imgurls" value={imgurls}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Title</FormLabel>
<Input  type='text' placeholder='Post' color={"#FED7D7"} w="70%" 
name="Post" value={Post} onChange={Handlechange}  />

<FormLabel  textAlign={"center"} >Place</FormLabel>
<Input  type='text' placeholder='Place' color={"#FED7D7"} w="70%" 
name="Place" value={Place}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} > Time</FormLabel>
<Input  type='time' placeholder=' Time' color={"#FED7D7"} w="70%" 
name="time" value={time}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Date</FormLabel>
<Input  type='date' placeholder='Event Date' color={"#FED7D7"} w="70%" 
name="date" value={date}  onChange={Handlechange} />



</FormControl>
<br/>

<Button onClick={Handlesubmit} bg={"blue.400"} >ADD POST</Button>
</Box>



</Box>

</Box>
    </div>
  )
}

export default Home