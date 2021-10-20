import React from "react";
import { HeroContainer, Image, Text} from './Hero.styles';
import FarmImage from '../../../assets/FarmAbout.png'


const Hero = () => (
  <HeroContainer>
    <Image>
      <img src={FarmImage} alt="Logo" />
    </Image>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
       sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  </HeroContainer>
);

export default Hero;