import React,{useState} from 'react';
import { Carousel } from 'react-bootstrap';
import qatar1 from './Images/doha.jpg';
import qatar2 from './Images/qatar1.jpg';


function Headingslides(){
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return(
        <>
         <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img src={qatar1} width="100%" height="450px" alt=""/>
        </Carousel.Item>

        <Carousel.Item>
        <img src={qatar2} width="100%" height="450px" alt=""/>
        </Carousel.Item>
      </Carousel>
        </>
    )
}
export default Headingslides;