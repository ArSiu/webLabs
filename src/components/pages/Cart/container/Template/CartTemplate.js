import React from 'react';
import FarmImage from '../../../../../assets/farm.png';
import {CartTemplateStyles,Text,Button} from './CartTemplate.styles';

const CartTemplate = (props) => {
    return (
        <CartTemplateStyles>
            <img className="item__photo" src={FarmImage} alt="farm"></img>
            <Text>Name: {props.farm.name}</Text>
            <Text>Price: {props.farm.price}</Text>
            <Button onClick={() => props.onDeduct(props.farm.id)}>-</Button>
            <label>{props.farm.units}</label>
            <Button onClick={() => props.onAdd(props.farm.id)}>+</Button>
            <label>{props.farm.units*props.farm.price}$</label>
            <Button onClick={() => props.onDel(props.farm.id)}>Delete</Button>
        </CartTemplateStyles>
    );
}

export default CartTemplate;