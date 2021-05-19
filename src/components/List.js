import React, { useEffect, useState } from 'react';
import * as api from '../api/index';

const List = ({text, todos, setTodos, todo}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        api.fetchDepartments().then(data => {
            console.log()
            // text = data.data;
            setData(data.data);
        })
    },[])

    console.log(data);
    return (
        <>
            <ul>
                {data.map(item =>  <li> {item.DepartmentId} - {item.DepartmentName}</li> )}
            </ul>
        </>
    )
} 

export default List;