import React, {useState, useEffect} from "react";
import * as api from "../../api/index";

const ListEmp = () => {
    const [res, setRes] = useState();

    useEffect(() => {
        api.fetchEmployee().then(res => {
            setRes(res.data)
            console.log(res);
        })
    }, [])

    return (
        <>
            <ul>
                {/* {res.map(item => <li>{item.EmployeeId} - {item.EmployeeName}</li>)} */}
            </ul>
        </>
    )
}

export default ListEmp;