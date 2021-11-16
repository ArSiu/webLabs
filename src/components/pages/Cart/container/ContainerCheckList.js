import React, {useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart,updateItemUnits} from "../../../redux/actions/CartActions";
import CartTemplate from "./Template/CartTemplate";
import { CartList, CartListli, TotalStyle } from "./ContainerCheckList.styles";

const ContainerCheckList = () => {
    const dispatch = useDispatch();
    const cartFarms = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(cartFarms);

    function HandleDeleteFromCart(id) {
        dispatch(deleteFromCart({id}));
    }

    function HandleDeductUnit(id) {
        let units = -1;
        dispatch(updateItemUnits({id, units}));
    }

    function HandleAddUnit(id) {
        let units = 1;
        dispatch(updateItemUnits({id, units}));
    }

    function Total(){
        return cartFarms.reduce((total, farm) => {
            total += farm.price * farm.units;
            return total;
        }, 0);

    }
    
    function FarmContainer(props) {
        let farms = props.farms;
        
        if(farms.length == 0){
            return(<TotalStyle>Cart is empty</TotalStyle>);
        }else{
            return(
                <CartList>
                    {
                        farms.map(((farm,keyid) => (
                            <CartListli key={keyid}>
                               <CartTemplate
                                farm={farm}
                                onAdd={HandleAddUnit.bind(farm.id)}
                                onDeduct={HandleDeductUnit.bind(farm.id)}
                                onDel={HandleDeleteFromCart.bind(farm.id)}
                                />
                            </CartListli>)))
                    }
                </CartList>

            );
        }
    }

    return (
        <React.Fragment>
            <FarmContainer farms={cartFarms}/>
            <TotalStyle>Total: <Total/>$</TotalStyle>
        </React.Fragment>
    );
};





export default ContainerCheckList;