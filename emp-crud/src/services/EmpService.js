import axios from "axios";

const API_URL = "http://localhost:8080/api/emp";

export const addEmp = (emp) => 
    axios.post(`${API_URL}/add`, emp);

export const getEmps = () => 
    axios.get(`${API_URL}/all`);

export const updateEmp = (id, emp) => 
    axios.put(`${API_URL}/update/${id}`, emp);

export const deleteEmp = (id) => 
    axios.delete(`${API_URL}/delete/${id}`);