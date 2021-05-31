import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployee } from "../../actions/employeeAction";

const ListEmp = (props) => {
    const Employee  = useSelector((state) => state.employeeReducer.Employee);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEmployee());
        console.log("DCm", dispatch);
    }, [])

    const handleDelete = (item) => {
        const newsId = item.EmployeeID;
        dispatch(deleteEmployee(newsId));
    }
    console.log("Employee: ", Employee);
    return (
        <>
            <ul>
                {Employee?.map((item, index) => (
                    <li key={index}>
                        {item.EmployeeID} - {item.EmployeeName} - {item.Department} 
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListEmp;