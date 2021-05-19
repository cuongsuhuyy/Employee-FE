import axios from "axios";

const url = 'http://192.168.213.229:53535/api/'
const Dep = 'Department'
const Emp = 'Employee'

//Department
export const fetchDepartments = () => axios.get(url + Dep);

//Employee
export const fetchEmployee = () => axios.get(url + Emp);