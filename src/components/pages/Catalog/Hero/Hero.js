import React, {useState,useEffect} from "react";
import { HeroContainer,Select,Search,Wrapper,AboutContainer,LoadingWrraper} from './Hero.styles';
import About from '../About/About';
import FarmTemplate from '../../../farmTemplate/FarmTemplate.js';
import Loading from '../../../loading/Loading.js'
import FarmApi from '../../../util/Api/Api'

const Hero = () => {
	const[farms,setFarms] = useState(null);
	const[farmRender, setFarmRender] = useState(farms);
	
    useEffect(()=>{
        FarmApi.getAll()
        .then((result) => {setFarms(result.data);setFarmRender(result.data);} );
    },[]);


	return (
		<Wrapper>
			<HeroContainer>
				<Select>
					<FilterItem text="Filter: ">
						<DropdownMenu />
					</FilterItem>
				</Select>

				<Search>
		            <Input />
		            <ClearButton />
		            <SearchButton />
		    	</Search>
			</HeroContainer>

			<AboutContainer>
				{farms ? <About farms={farmRender}/>:<LoadingWrraper><Loading /></ LoadingWrraper>}
			</AboutContainer>

		</Wrapper>
	);


	function Input() {
		return (
			<input id="input" className="header__search__input" type="text" placeholder="Type something..."></input>
		);
	}

	function ClearButton() {
		return (
			<button id="clear__button" className="header__clear" type="button" onClick={()=>handleReset()}>Clear</button>
		);
	}

	function SearchButton() {
		return (
			<button id="search__button" className="header__search" type="button" onClick={()=>SearchImpl()}>Search</button>
		);
	}

	function handleReset() {
		setFarmRender(farms);
	  	Array.from(document.querySelectorAll("input")).forEach(
	    	input => (input.value = "")
	  	);
	  
	};

	function SearchImpl(){	
		const title = document.getElementById('input').value
		let temp = FarmApi.getSearch(title).then((result) => {setFarmRender(result.data)});
	}

	function FilterItem(props) {
		const [open, setOpen] = useState(false);
		return(
			<li className="filter-item">
				<a href="#" className="filter-item__button" onClick={() => setOpen(!open)}>
					{props.text}
				</a>
				{open && props.children}
			</li>
		);
	}

	function DropdownMenu() {
		return (
			<div className="dropdown">
				<div className="menu-item">
					<button className="button_filter" onClick={()=>filterByAmountOfLivestock()}>Sort by Amount of Live Stocks</button>
					<button className="button_filter" onClick={()=>filterByPrice()}>Sort by Price</button>
				</div>
			</div>
		);
	}

	function filterByAmountOfLivestock(){
		let sortedFarms = Array.from(farms);
	    let temp = FarmApi.getSortAmountOfLiveStock().then((result) => {setFarmRender(result.data)});
	}

	function filterByPrice(){
		let sortedFarms = Array.from(farms);
	    let temp = FarmApi.getSortPrice().then((result) => {setFarmRender(result.data)});
	}

	
}

export default Hero;