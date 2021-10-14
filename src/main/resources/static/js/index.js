import {renderFarms, calcAmountOfLivestock} from "./index_util.js";
import {get, post, put, del, sleep} from "./crud_http.js";

const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const countButton = document.getElementById("count__button");
const switchButton = document.getElementById("switch");
const searchInput = document.getElementById("search__input");
const countVal = document.getElementById("count__value");

export let farms;

document.addEventListener("DOMContentLoaded",() => {
    farms = get();
    farms.then(function(result) {
        if(result.length === 0){
            farms = [
                {
                    name: "Saint corn",
                    location: "New Edem",
                    amountOfLivestock: 2000,
                    powerOfVents: 100,
                },
                {
                    name: "Devil potato",
                    location: "New Edem",
                    amountOfLivestock: 999,
                    powerOfVents: 10000,
                },
                {
                    name: "Evil Creature",
                    location: "New Edem",
                    amountOfLivestock: 10000,
                    powerOfVents: 10000,
                }
            ];
            for (const farm of farms) {
                post(farm);
            }
        }
        renderFarms(result);
    });
});

searchButton.addEventListener("click", () => {
    farms = get();
    farms.then(function(result) {
        const searchFarm = result.filter(farm => farm.name.search(searchInput.value) !== -1);
        renderFarms(searchFarm);
    });

});


clearButton.addEventListener("click", () => {
    searchInput.value = "";
    farms.then(function(result) {
       renderFarms(result);
    });
});

switchButton.addEventListener("change", () => {
    farms.then(function(result) {
        let sortedFarms = Array.from(result);
        if (switchButton.checked) {
            sortedFarms.sort((farm1, farm2) => farm1.amountOfLivestock - farm2.amountOfLivestock);
        }
        renderFarms(sortedFarms);
    });
    
});

countButton.addEventListener("click", () => {
    farms.then(function(result) {
       countVal.innerHTML = calcAmountOfLivestock(result);
    });
});

window.removeFarm = (idDel) => {
    del(idDel);
    sleep(500);
    location.reload();
}

window.editFarm = (id) => {
    localStorage.setItem('editFarm',JSON.stringify(id));
    window.location.href = "create.html";
}

