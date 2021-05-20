import React, { useState } from "react";
import List from "./List";
import * as api from "../api/index";

const Form = ({
  setCreateDep,
  DepId,
  DepName,
  setDepId,
  setDepName,
  res,
  setRes,
}) => {
  const [dep, setDep] = useState([]);

  const inputTextDepID = (e) => {
    console.log(e.target.value);
    setDepId(e.target.value);
  };

  const inputTextDepName = (e) => {
    console.log(e.target.value);
    setDepName(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setCreateDep = { DepartmentId: parseInt(DepId), DepartmentName: DepName };
    api.createDepartments(setCreateDep)
    setDepId("");
    setDepName("")
    console.log(setCreateDep);
  };

  return (
    <form>
      <input
        value={DepId}
        onChange={inputTextDepID}
        type="text"
        className=""
        placeholder="DepartmentID"
      ></input>
      <input
        value={DepName}
        onChange={inputTextDepName}
        type="text"
        className=""
        placeholder="DepartmentName"
      ></input>
      <button onClick={submitTodoHandler} className="" type="submit">
        +
      </button>
      <p>{dep}</p>
      <List res={setRes} />
    </form>
  );
};

export default Form;
