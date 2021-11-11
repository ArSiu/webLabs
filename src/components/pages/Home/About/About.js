import React,{useState,useEffect} from "react";
import {AboutContainer, ViewMore,LoadingWrraper} from './About.styles';
import FarmTemplate from '../../../farmTemplate/FarmTemplate.js';
import Loading from '../../../loading/Loading.js';
import axios from "axios";

const About = () => {
    const[farms,setFarms] = useState(null);
    const[count, setCount] = useState(3);

    useEffect(()=>{
        axios.get(`http://localhost:8080/farm`).then((result) => {
            setFarms(result.data)
        });
    },[]);

    return (
        <AboutContainer>
            {farms ? <ItemContainer farms={farms} count={count}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
            <ViewMore>
              <button className="view_more" onClick={() => setCount(count + 3)}>
                Show More
              </button>
            </ ViewMore>
        </AboutContainer>
    );
}

function ItemContainer(props) {
  return(
        <ul className="aside_item">
            {
                props.farms.slice(0, props.count).map(((farm,keyId) => (
                    <li key={keyId}>
                        <FarmTemplate
                        id={keyId}  
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