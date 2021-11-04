import React from 'react';
import {FarmTemplateStyle} from './FarmTemplate.styles';
import FarmImage from '../../assets/farm.png'
import { BrowserRouter as Router, Switch, Route, NavLink,Redirect,Link } from "react-router-dom";
import Details from '../pages/Details/Details.js'

const FarmTemplate = (props) => {
    return (
        <FarmTemplateStyle>
            <img className="item__photo" src={FarmImage} alt="farm"></img>
            <div className="item">
                <h3 className="item__name">Name: {props.name}</h3>
                <h5 className="item__location">Location: {props.location}</h5>
                <h5 className="item__amoutOfLivestock">Amout Of Livestock: {props.amountOfLivestock}</h5>
                <h5 className="item__powerOfVents">Power Of Vents: {props.powerOfVents}</h5>
                <h5 className="item__price">Price: {props.price}</h5>
                <button className="button__viewmore" >
                    <Link className="viewmore_link" to={"/details/"+props.id}>View</Link>
                </button>
            </div>
        </FarmTemplateStyle>
    );
}

export default FarmTemplate;