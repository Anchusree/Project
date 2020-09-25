import React,{useState} from 'react';
import { Carousel } from 'react-bootstrap';
import ooredoo from './Images/ooredoo.jpg';
import vodafone from './Images/vodafone-logo.jpg';
import qu from './Images/qatar-university.jpg';
import gbi from './Images/GBI-logo.jpg';


function ParticipantSlides(){
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return(
        <>
         <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <a href="https://www.ooredoo.qa/portal/OoredooQatar/home?gclid=CjwKCAjw2Jb7BRBHEiwAXTR4jWpOyHUdXmnfrBhu9feWLgO0kF6IlH3bAATOgx6lucxEyK0X-o80JxoCNyIQAvD_BwE"><img src={ooredoo} width="420px" height="250px" alt=""/></a>
          <a href="https://www.vodafone.qa/en/home?gclid=CjwKCAjw2Jb7BRBHEiwAXTR4jW4knamXiU4_kE_GK3PNUpA55APgJEZFnnTCXLhUXBHyybB7hmZ96RoCdk8QAvD_BwE"><img src={vodafone} width="420px" height="250px" alt=""/></a>
          <a href="http://www.qu.edu.qa/"><img src={qu} width="420px" height="250px" alt=""/></a>

        </Carousel.Item>

        <Carousel.Item>
        <a href="https://www.gbiinc.com/"><img src={gbi} width="420px" height="250px" alt=""/></a>
        <a href="https://www.ooredoo.qa/portal/OoredooQatar/home?gclid=CjwKCAjw2Jb7BRBHEiwAXTR4jWpOyHUdXmnfrBhu9feWLgO0kF6IlH3bAATOgx6lucxEyK0X-o80JxoCNyIQAvD_BwE"><img src={ooredoo} width="420px" height="250px" alt=""/></a>
          <a href="https://www.vodafone.qa/en/home?gclid=CjwKCAjw2Jb7BRBHEiwAXTR4jW4knamXiU4_kE_GK3PNUpA55APgJEZFnnTCXLhUXBHyybB7hmZ96RoCdk8QAvD_BwE"><img src={vodafone} width="420px" height="250px" alt=""/></a>

        </Carousel.Item>
      </Carousel>
        </>
    )
}
export default ParticipantSlides;