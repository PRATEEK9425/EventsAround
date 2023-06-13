
import React from 'react'
import { Box, Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Tfoot  } from '@chakra-ui/react'
const Eventtable = () => {
  return (
    <Box>
        <Text fontWeight={'bold'}  >Event List</Text>
  <TableContainer>
  <Table variant='striped' colorScheme='teal' textColor={"black"}>
    <TableCaption>Event List </TableCaption>
    <Thead>
      <Tr>
        <Th>Event Name</Th>
        <Th> Event Date</Th>
        <Th>Event Time</Th>
        <Th>Location</Th>
        <Th>Organiser</Th>
        <Th >Attendies</Th>
        <Th>Coorect Date</Th>
        <Th >Cancel Event</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>
  )
}

export default Eventtable