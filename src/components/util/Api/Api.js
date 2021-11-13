import axios from "axios";

const FarmApi = {
    getAll: () => axios.get(`http://localhost:8080/farm`),
    getOne: (id) => axios.get(`http://localhost:8080/farm/${id}`),
};

export default FarmApi;