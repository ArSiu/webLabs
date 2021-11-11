import React, {useState,useEffect} from "react";
import { HeroContainer,Text,HeroInner,LoadingWrraper} from './Hero.styles';
import FarmImage from '../../../../assets/farm.png';
import Loading from '../../../loading/Loading';
import axios from "axios";

const Hero = (props) => {
	const[farm,setFarms] = useState(null);
	useEffect(()=>{
        axios.get(`http://localhost:8080/farm/${props.id}`).then((result) => {
            setFarms(result.data)
        });
    },[]);
	console.log(farm);
	return(
		<div>
			{farm ? <Show farm={farm}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
		</div>
	);
	
}

function Show ({farm}){
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