import React, {useState,useEffect} from "react";
import { HeroContainer,Text,HeroInner,LoadingWrraper} from './Hero.styles';
import FarmImage from '../../../../assets/farm.png';
import Loading from '../../../loading/Loading';
import FarmApi from '../../../util/Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../../redux/actions/CartActions";

const Hero = (props) => {
	
    const { cartFarms } = useSelector(state => state);
	const[farm,setFarms] = useState(null);
	useEffect(()=>{
        FarmApi.getOne(props.id).then((result) => {
            setFarms(result.data)
        });
    },[]);
	return(
		<div>
			{farm ? <Show farm={farm}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
		</div>
	);
	
}

function Show (props){
	
	return(
		<HeroContainer>
			<HeroInner>
				<img className="item__photo" src={FarmImage} alt="farm"></img>
	            <Text>
	                <h3 className="item__name">Name: {props.farm.name}</h3>
	                <h5 className="item__location">Location: {props.farm.location}</h5>
	                <h5 className="item__amoutOfLivestock">Amout Of Livestock: {props.farm.amountOfLivestock}</h5>
	                <h5 className="item__powerOfVents">Power Of Vents: {props.farm.powerOfVents}</h5>
	                <h5 className="item__price">Price: {props.farm.price}</h5>
	            </Text>
	            <AddPurc farm={props.farm}/>
	        </HeroInner>
        </HeroContainer>
	);
}

function AddPurc(props){
	const dispatch = useDispatch()
	return <button id="add" className="add" type="button" onClick={()=>dispatch(addToCart(props.farm))}>Add to cart</button>
}


export default Hero;