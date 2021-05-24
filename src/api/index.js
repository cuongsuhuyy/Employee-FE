import axios from "axios";

const url = 'http://192.168.213.229:53535/api/'
const Dep = 'Department'
const Emp = 'Employee'

//Department
export const fetchDepartments = () => axios.get(url + Dep);
export const createDepartments = (newDep) => axios.post(url + Dep, newDep);
export const deleteDepartments = (id) => axios.delete(`${url + Dep}/${id}`);
export const updateDepartments = (updateDepartments) => axios.put(url + Dep, updateDepartments);

//Employee
export const fetchEmployee = () => axios.get(url + Emp);
export const createEmployee = (newEmp) => axios.post(url + Emp, newEmp);
