import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box,Text } from "@chakra-ui/react";

const data=[
    {
        id:1,
        image:"https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
        id:2,
        image:"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    { 
        id:3,
        image:"https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50JTIwcGljcyUyMGhvcml6b250YWxseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        id:4,
        image:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },

    {
        id:5,
        image:"https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV2ZW50JTIwcGljcyUyMGhvcml6b250YWxseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },

    {
        id:6,
        image:"https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50JTIwcGljcyUyMGhvcml6b250YWxseXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    }
]

function Sliding(){

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div>
      
<div>
<Slider {...settings}>
{
        data.map((item)=>(
            <Box key={item.id} >
            <img style={{width:"100%",height:"400px"}} src={item.image} alt="offers"/>
            </Box>
        ))
    }
</Slider>
</div>
 <Text marginTop="30px" fontSize="xl" fontWeight="bold" color="gray">Some Glimpse Of Events...</Text>
        </div>
    )
}

export default Sliding;