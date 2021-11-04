import React, {useState} from "react";
import { HeroContainer,Text,HeroInner } from './Hero.styles';
import {farms} from '../../../util/Farms';
import FarmImage from '../../../../assets/farm.png'

const Hero = (props) => {
	console.log(props.id);
	let farm = farms[props.id];
	console.log(farm);

	return(
		<HeroContainer>
			<HeroInner>
				<img className="item__photo" src={FarmImage} alt="farm"></img>
	            <Text>
	                <h3 className="item__name">Name: {farm.name}</h3>
	                <h5 className="item__location">Location: {farm.location}</h5>
	                <h5 className="item__amoutOfLivestock">Amout Of Livestock: {farm.amountOfLivestock}</h5>
	                <h5 className="item__powerOfVents">Power Of Vents: {farm.powerOfVents}</h5>
	                <h5 className="item__price">Price: {farm.price}</h5>
	            </Text>
            </HeroInner>
		</HeroContainer>
		
	);
}


export default Hero;