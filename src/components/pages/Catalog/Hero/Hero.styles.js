import styled from 'styled-components';

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

  .menu-item {
    padding:5px;
    background-color: #0CAFAF;
    display: flex;
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
  
`

export const Search = styled.div`
    .header__right {
        display:flex;
        align-items:center;
        margin-left: 330%;
    }

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

    button {
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
