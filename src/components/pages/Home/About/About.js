import React,{useState} from "react";
import {AboutContainer, ViewMore} from './About.styles';
import FarmTemplate from '../../../farmTemplate/FarmTemplate.js';

const About = (props) => {
    const[count, setCount] = useState(3);

    return (
        <AboutContainer>
            <ItemContainer farms={props.farms} count={count}/>
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