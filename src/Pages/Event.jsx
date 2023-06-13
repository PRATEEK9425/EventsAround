import { Avatar, Box, Button, FormControl,  FormLabel,  Image,  Input,SimpleGrid,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import {Getdatafn, Postdatafn} from "../Redux/EventsReducer/action"

export const Event = () => {
const dispatch = useDispatch()
const EventsList = useSelector((state)=>state.Reducer.EventData)

console.log(EventsList)



const initial= {
  "username":"",
"imgurl":"",
"title":"",
"Description":"",
"date":  new Date() ,
"EventTime":"",
"EventDate":"",
"Location":"",
"Organiser":"",
"Attendes":""
}

const [formdata,setFormdata]=useState(initial)


const Handlechange=(e)=>{
const {name,value} = e.target

setFormdata({...formdata,[name]:value})
dispatch(Getdatafn())
}

const Handlesubmit=(e)=>{
e.preventDefault()

dispatch(Postdatafn(formdata))
dispatch(Getdatafn())
}

const {title,Description,imgurl,EventTime,EventDate,Location,Organiser,Attendes} =formdata




useEffect(()=>{


  dispatch(Getdatafn())
  
  
  },[dispatch,EventsList.length])
  



  return (
   < Box  w="98%" m="auto" mt="20px" >


<SimpleGrid columns={[1, 2, 2]} spacing='10px'>
  {/* Box 1 */}

  <Box bg='#9AE6B4' height='auto'>

  <Text fontSize={'6xl'} color={"Teal"} >All Event</Text>

  <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
  
    {
      EventsList.length>0 && EventsList.map((el)=>{
        return <Box bg="#90CDF4"  textAlign={"left"}  borderRadius={"10px"} boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"  >
          <Image src={el.imgurl}   />
          <Text>Event Name : {el.title}</Text>
          <Text> Description : {el.Description}</Text>
          <Text> Date : {el.EventDate}</Text>
          <Text> Time: {el.EventTime}</Text>
          <Text> Location : {el.Location}</Text>
          <Text> Organiser : {el.Organiser}</Text>
          <Text> Attendies: {el.Attendes}</Text>
          

        </Box>
      })
    }
 
  
</SimpleGrid>

  </Box>
  {/* box----1 */}
  <Box bg='#ED8936' height='auto'  >
  <Text fontSize={'6xl'} color={"Teal"} >Add Event</Text>
 

  <FormControl bg='#F6AD55'>

<FormLabel  textAlign={"center"} >Images</FormLabel>
<Input type='text' placeholder='Images Url' color={"#FED7D7"} w="70%" textColor={"red"}
name="imgurl" value={imgurl}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Title</FormLabel>
<Input  type='text' placeholder='Title' color={"#FED7D7"} w="70%" 
name="title" value={title} onChange={Handlechange}  />

<FormLabel  textAlign={"center"} >Description</FormLabel>
<Input  type='text' placeholder='Description' color={"#FED7D7"} w="70%" 
name="Description" value={Description}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Event Time</FormLabel>
<Input  type='time' placeholder='Event Time' color={"#FED7D7"} w="70%" 
name="EventTime" value={EventTime}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Event Date</FormLabel>
<Input  type='date' placeholder='Event Date' color={"#FED7D7"} w="70%" 
name="EventDate" value={EventDate}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Location</FormLabel>
<Input  type='text' placeholder='Location' color={"#FED7D7"} w="70%" 
name="Location" value={Location}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Organiser</FormLabel>
<Input  type='text' placeholder='Organiser' color={"#FED7D7"} w="70%" 
name="Organiser" value={Organiser}  onChange={Handlechange} />

<FormLabel  textAlign={"center"} >Attendies</FormLabel>
<Input  type='text' placeholder='Attendies' color={"#FED7D7"} w="70%" 
name="Attendes" value={Attendes}  onChange={Handlechange} />

</FormControl>
<br/>
<br/>
<Button onClick={Handlesubmit} bg={"blue.400"} >ADD EVENT</Button>
  </Box>
  
</SimpleGrid>
 
 
  </Box>

  )
}

