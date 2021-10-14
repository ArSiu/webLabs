import {getInputValues, getInputValuesEdit, clearInput} from "./create_util.js";
import {get, post, put, del, sleep} from "./crud_http.js";

let farms = get();
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
        sleep(500);
        window.location.href = "index.html";
    }else{
        event.preventDefault();
        addFarm(getInputValues());
        clearInput();
        sleep(500);
        window.location.href = "index.html";
    }
})

const addFarm = ({name, location, amountOfLivestock, powerOfVents}) => {
    const newFarm = {
        name,
        location,
        amountOfLivestock,
        powerOfVents,
    };
    for(let i in newFarm){
        if (newFarm[i] == "") {
            alert("invalid " + i);
            return null;
        }
    }
    let response = post(newFarm);
    if(response.ok){
        alert(response.status);
    }
}

const editFarm = (id,{name, location, amountOfLivestock, powerOfVents}) => {
    const newFarm = {
        name,
        location,
        amountOfLivestock,
        powerOfVents,
    };
    for(let i in newFarm){
        if (newFarm[i] == "") {
            alert("invalid " + i);
            return null;
        }
    }
    put(newFarm,editId);
}



