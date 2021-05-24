import React, {useState, useEffect} from "react";

const ListEmp = (props) => {
    return (
        <>
            <ul>
                {props.data?.map((item, index) => (
                    <li key={index}>
                        {item.EmployeeID} - {item.EmployeeName} - {item.Department} <button>Delete</button>
                    </li>
                ))}
                
            </ul>
        </>
    )
}

export default ListEmp;