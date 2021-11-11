import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #A8BCBE;
    width:100%;
    height:100%;
`

export const LoadingWrraper = styled.div`
    display: flex;
    justify-content: center;
    margin:20px;
`


export const HeroInner = styled.div`
    display: flex;
    margin:20px;

    border-radius:20px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #fff;
    width:700px;
    height:300px;
    box-shadow: 7px 5px 5px #A1A8A9;

    .item__photo {
        width: 55%;
        border-radius: 10px;
        margin-right:25px;
        box-shadow: 7px 5px 5px #A1A8A9;
    }
`

export const Text = styled.div`
    margin:10px;
    padding:5px;
    background-color: #F2F3F4;
    border-radius:15px;
    box-shadow: 7px 5px 5px #A1A8A9;

    h5{
        font-family: Avenir;
        font-weight: 900;
        font-size: 20px;
        line-height: 100%;
        color: #034545;
    }

    h3{
        font-family: Avenir;
        font-weight: 900;
        font-size: 20px;
        line-height: 100%;
        color: #566573;
    }
    
`

