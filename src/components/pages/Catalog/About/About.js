import React from "react";
import {AboutContainer} from './About.styles';
import FarmTemplate from '../../../farmTemplate/FarmTemplate.js';

const About = (props) =>  (
	<AboutContainer>
		<ItemContainer farms={props.farms}/>
	</AboutContainer>
);


function ItemContainer(props) {
	let farms = props.farms;
	
	return(
		<ul className="aside_item">
			{
                farms.map(((farm,id) => (
                    <li key={id}>
                    	<FarmTemplate  
	                    name={farm.name} 
	                    location={farm.location} 
	                    amountOfLivestock={farm.amountOfLivestock}
	                    powerOfVents={farm.powerOfVents}
	                    price={farm.price}
	                    />
                    </li>)))
            }
		</ul>
	);
}

export default About;