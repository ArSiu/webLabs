import axios from "axios";

const FarmApi = {
    getAll: () => axios.get(`http://localhost:8080/farm`),
    getOne: (id) => axios.get(`http://localhost:8080/farm/${id}`),
    getSearch: (title) => axios.get(`http://localhost:8080/farm/search?name=${title}`),
    getSortAmountOfLiveStock: () => axios.get(`http://localhost:8080/farm/sort?name=amountOfLiveStocks`),
    getSortPrice: () => axios.get(`http://localhost:8080/farm/sort?name=price`),
};

export default FarmApi;