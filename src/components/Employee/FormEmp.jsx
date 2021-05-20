import React, {useState, useEffect} from "react";
import ListEmp from "./ListEmp";

const FormEmp = () => {
    const [emp, setEmp] = useState();

    return (
        <form>
            <ListEmp />
        </form>
    )
}

export default FormEmp;