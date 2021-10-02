import {getInputValues, getInputValuesEdit, clearInput} from "./create_util.js";

let farms = JSON.parse(localStorage.getItem('farms'));
let index = JSON.parse(localStorage.getItem('index'));
let editId = JSON.parse(localStorage.getItem('editFarm'));

const submitButton = document.getElementById("button__submit");

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem('editFarm') != null){
        document.title = "Edit Farm";
        document.getElementById("title").innerHTML = "Edit Farm"; 
    }
});

submitButton.addEventListener("click", event => {
    if(localStorage.getItem('editFarm') != null){
        event.preventDefault();
        const {name, location, amountOfLivestock, powerOfVents} = getInputValuesEdit();
        editFarm(editId,{name, location, amountOfLivestock, powerOfVents});
        localStorage.removeItem('editFarm');
        clearInput();
    }else{
        event.preventDefault();
        const {id, name, location, amountOfLivestock, powerOfVents} = getInputValues();
        localStorage.setItem('index', JSON.stringify(index++));
        addFarm({id, name, location, amountOfLivestock, powerOfVents});
        clearInput();
    }
})

const addFarm = ({id, name, location, amountOfLivestock, powerOfVents}) => {
    const newFarm = {
        id,
        name,
        location,
        amountOfLivestock,
        powerOfVents,
    };
    farms.push(newFarm);
    localStorage.setItem('farms', JSON.stringify(farms));
    console.log(farms);
}



const editFarm = (id,{name, location, amountOfLivestock, powerOfVents}) => {
    console.log(editId);
    console.log(farms);
    console.log(farms[editId]);
    const newFarm = {
        id,
        name,
        location,
        amountOfLivestock,
        powerOfVents,
    };
    farms[editId] = newFarm;
    localStorage.setItem('farms', JSON.stringify(farms));
    console.log(farms[editId]);
}



