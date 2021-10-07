import {renderFarms, calcAmountOfLivestock} from "./index_util.js";

const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const countButton = document.getElementById("count__button");
const switchButton = document.getElementById("switch");
const searchInput = document.getElementById("search__input");
const countVal = document.getElementById("count__value");


export let index;
export let farms;

document.addEventListener("DOMContentLoaded",() => { 
    if (localStorage.getItem('farms') == null) {
        index = 3;
        localStorage.setItem('index', JSON.stringify(index));
        farms = [
            {
                id: 0,
                name: "Saint corn",
                location: "New Edem",
                amountOfLivestock: 2000,
                powerOfVents: 100,
            },
            {
                id: 1,
                name: "Devil potato",
                location: "New Edem",
                amountOfLivestock: 999,
                powerOfVents: 10000,
            },
            {
                id: 2,
                name: "Evil Creature",
                location: "New Edem",
                amountOfLivestock: 10000,
                powerOfVents: 10000,
            }
        ];
        localStorage.setItem('farms', JSON.stringify(farms));
    }else{
        farms = JSON.parse(localStorage.getItem('farms'));
        index = JSON.parse(localStorage.getItem('index'));
    }
    renderFarms(farms);
    console.log(farms);
    console.log(index);
});

searchButton.addEventListener("click", () => {
    const searchFarm = farms.filter(farm => farm.name.search(searchInput.value) !== -1);
    renderFarms(searchFarm);
});


clearButton.addEventListener("click", () => {
    searchInput.value = "";
    renderFarms(farms);
});

switchButton.addEventListener("change", () => {
    let sortedFarms = Array.from(farms);
    if (switchButton.checked) {
        sortedFarms.sort((farm1, farm2) => farm1.amountOfLivestock - farm2.amountOfLivestock);
    }
    renderFarms(sortedFarms);
});

countButton.addEventListener("click", () => {
    countVal.innerHTML = calcAmountOfLivestock(farms);
});

window.removeFarm = (idDel) => {
    let tempfarms = [];
    var isOnDelElem = false;
    for (const farm of farms) {
        if(farm.id == idDel && isOnDelElem == false) {
            isOnDelElem = true;
            continue;
        } else {
            if(isOnDelElem != false){
                farm.id -=1;
                tempfarms.push(farm)
            }else{
                tempfarms.push(farm)
            }
            
        }
    }
    farms = tempfarms;
    localStorage.setItem('index', JSON.stringify(index-1));
    localStorage.setItem('farms', JSON.stringify(tempfarms));
    renderFarms(tempfarms);
}

window.editFarm = (id) => {
    localStorage.setItem('editFarm',JSON.stringify(id));
    window.location.href = "create.html";
}
//const farmToDel = farms.map(farms => farms.id);
//farms.splice(farmToDel.indexOf(id), 1);