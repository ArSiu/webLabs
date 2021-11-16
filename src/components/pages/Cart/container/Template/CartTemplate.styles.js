import styled from 'styled-components';

export const CartTemplateStyles = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    height:150px;
    background-color: #F9EBEA;
    box-shadow: 2px 2px 5px 4px #A1A8A9;
    .item__photo{
        width:150px;
        height:100px;
        border-radius: 5px;
    }
    
`
export const Text = styled.p`
    margin-left:20px;
    font-family: Avenir;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: #273746;
    margin-top:16px;
`

export const Button = styled.button`
    outline: none;
    border: none;
    padding: 0px 20px;
    margin-left:20px;
    font-family: Avenir;
    font-weight: 600;
    font-size: 25px;
    line-height: 160%;
    color: #273746;
    background-color: #F9EBEA;

    :hover {
        background-color: #009595;
        border-radius:5px;
    }
`