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
        window.location.href = "index.html";
    }else{
        index++;
        event.preventDefault();
        const {id, name, location, amountOfLivestock, powerOfVents} = getInputValues();
        addFarm({id, name, location, amountOfLivestock, powerOfVents});
        localStorage.setItem('index', JSON.stringify(index));
        clearInput();
        window.location.href = "index.html";
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
    for(let i in newFarm){
        if (newFarm[i] =="") {
            alert("invalid input");
            return null;
        }
    }
    farms.push(newFarm);
    localStorage.setItem('farms', JSON.stringify(farms));
    console.log(farms);
    console.log(index);
}

const editFarm = (id,{name, location, amountOfLivestock, powerOfVents}) => {
    console.log(editId);
    console.log(farms);
    const newFarm = {
        id,
        name,
        location,
        amountOfLivestock,
        powerOfVents,
    };
    console.log(newFarm.amountOfLivestock);
    for(let i in newFarm){
        if (newFarm[i] =="") {
            alert("invalid input");
            return null;
        }
    }
    farms[editId] = newFarm;
    localStorage.setItem('farms', JSON.stringify(farms));
    console.log(farms[editId]);
    console.log(editId);
}



