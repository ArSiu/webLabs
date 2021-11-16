import styled from 'styled-components';

export const AboutContainer = styled.div`
    margin-top: 50px;

    .aside_item {
        display: grid;
        grid-template-columns: repeat(3, 320px);
        row-gap: 10px;
        flex-wrap: wrap;
        justify-content: space-around;
    }

`

export const ViewMore = styled.div`
    display: flex;
    justify-content: center;

    .view_more{
        margin-left:12px;
        outline: none;
        border: none;
        border-radius: 5px;
        font-family: Avenir;
        font-weight: 500;
        font-size: 30px;
        line-height: 160%;
        color: #D6DBDF;
        background-color: #34495E;
        box-shadow: 7px 5px 5px #A1A8A9;
    }
`

export const LoadingWrraper = styled.div`
    display: flex;
    justify-content: center;
    margin:20px;
`