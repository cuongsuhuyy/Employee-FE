import React, { useEffect, useState } from 'react';
import * as api from '../api/index';

const List = ({}) => {
    const [res, setRes] = useState([]);
    useEffect(()=>{
        api.fetchDepartments().then(res => {
            setRes(res.data);
        })
    },[res])
    return (
        <>
            <ul>
                {res.map(item =>  <li> {item.DepartmentId} - {item.DepartmentName}</li> )}
            </ul>
        </>
    )
} 

export default List;