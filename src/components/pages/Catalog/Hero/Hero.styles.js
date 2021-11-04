import styled from 'styled-components';

export const Wrapper = styled.div`
    
`

export const AboutContainer = styled.div`
    margin-top: 50px;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
`

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #A8BCBE;
    width:100%;
    height:50px;
`

export const Text = styled.p`
    font-family: Avenir;
    font-weight: 600;
    font-size: 15px;
    line-height: 100%;
    color: #273746;
`

export const Select = styled.div`
  .filter-item{
    background-color:#34495E;
    width:80%;
    height:16px;
    border-radius:10px;
  }

  .dropdown{
    left:-0.5px;
    top: 30px;
    padding-bottom: 5px;
    width: 320px;
    position: absolute;
    overflow: hidden;
    border-radius: 5px 5px 10px 10px;
  }

  .button_filter{
        outline: none;
        border: none;
        margin-top: 5px;
        border-radius: 6px;
        font-family: Avenir;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        color: #D6DBDF;
        background-color: #34495E;
  }

  .menu-item {
    padding:5px;
    background-color: #0CAFAF;
    align-items: center;
    padding-left:5px;
    font-family: Avenir;
    font-weight: 300;
    font-size: 22px;
    line-height: 100%;
    color: #273746;
    
  }

  .filter-item__button{
    font-family: Avenir;
    font-weight: 300;
    font-size: 18px;
    color:#D6DBDF;
    display:flex;
    align-items:center
  }

  .menu-item:hover {
    background-color: #018383;
  }

  .filter-item:hover {
    background-color: #009595;
  }

  .button_filter:hover{
    background-color: #009595;
  }
  
`

export const Search = styled.div`
    display: flex;
    align-items:center;
    margin-left:60%;

    .header__search__input {
        margin-right: 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        font-family: Avenir;
        font-weight: 500;
        font-size: 16px;
        line-height: 160%;
    }
    .header__search {
        outline: none;
        border: none;
        padding: 0px 15px;
        margin-right: 20px;
        border-radius: 6px;
        font-family: Avenir;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        color: #D6DBDF;
        background-color: #34495E;
    }

    .header__clear {
        outline: none;
        border: none;
        padding: 0px 15px;
        margin-right: 20px;
        border-radius: 6px;
        font-family: Avenir;
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        color: #D6DBDF;
        background-color: #34495E;
    }

    button:hover {
        background-color: #009595;
    }
    
`
