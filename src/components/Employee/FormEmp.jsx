import React, {useState, useEffect} from "react";
import ListEmp from "./ListEmp";
import * as api from "../../api/index";

const FormEmp = ({setCreateEmp, EmpId, EmpName, EmpDep, setEmpId, setEmpName, setEmpDep, temp}) => {
    const inputTextEmpID = (e) => {
        console.log(e.target.value);
        setEmpId(e.target.value);
    }

    const inputTextEmpName = (e) => {
        console.log(e.target.value);
        setEmpName(e.target.value);
    }

    const inputTextEmpDep = (e) => {
        setEmpDep(e.target.value);
        console.log(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setCreateEmp = { EmployeeId: EmpId, EmployeeName: EmpName, Department: EmpDep };
        api.createEmployee(setCreateEmp).then(() => {
            temp(setCreateEmp);
        });
        setEmpId("");
        setEmpName("");
        setEmpDep("");
    }

    
    return (
        <form>
            <input
                placeholder="EmployeeID"
                value={EmpId}
                type="text"
                className=""
                onChange={inputTextEmpID}></input>
            <input
                placeholder="EmployeeName"
                value={EmpName}
                type="text"
                className=""
                onChange={inputTextEmpName}></input>
            <input
                value={EmpDep}
                placeholder="Department Employee"
                type="text"
                onChange={inputTextEmpDep}
                className=""></input>
            <button onClick={submitTodoHandler} type="submit">Submit</button>
        </form>
    )

}

export default FormEmp;