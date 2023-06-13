import { Avatar, Box, Image, SimpleGrid } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'
// import Manda from "../Photos/Mandakini.gif"
import Logo from  "../Pages/Logo.png"
const Navbar = () => {
  return (
    <Box>
      <Box w={["100%", "100%","100%"]} h={["400px","50px","50px"]} bgGradient='linear(to-l, #7928CA, #FF0080)' >

      <SimpleGrid columns={[1, 7, 7]} spacing={["5px","5px","25px"]}>
  <Box color="white" fontSize='2xl' as='em' height='50px'  >
  <Avatar name='Oshigaki Kisame' src={Logo} />
  </Box>
  <Box color="white" fontSize='2xl' as='em' height='50px' mt="5px" >
 <Link  to="/" >Home</Link>
  </Box>
  <Box color="white" fontSize='2xl' as='em' height='45px' mt="5px">
<Link  to="/event" >Event Details </Link>
  </Box>
  <Box color="white" fontSize='2xl' as='em' height='45px' mt="5px">
<Link  to="/marketplace" >Market Place </Link>
  </Box>
  <Box color="white" fontSize='2xl' as='em' height='50px' mt="5px">
 <Link>Login</Link>
  </Box>
  <Box color="white" fontSize='2xl' as='em' height='50px' mt="5px">
 <Link>signup</Link>
  </Box>
  
</SimpleGrid>
      </Box>   
    </Box>
  )
}

export default Navbar