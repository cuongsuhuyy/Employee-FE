import { useEffect, useState } from "react";
import FormDep from "./components/Department/FormDep";
import FormEmp from "./components/Employee/FormEmp.jsx";
import * as api from "./api/index";
import ListDep from "./components/Department/ListDep";
import ListEmp from "./components/Employee/ListEmp";
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloWorld from "./HelloWorld.jsx";
//import reducer
import { createStore } from "redux";
import reducer from "./reducer/reducers";

function App() {

  const initialState = "React";
  const store = createStore(reducer, initialState);

  const [DepId, setDepId] = useState("");
  const [DepName, setDepName] = useState("");

  const [EmpId, setEmpId] = useState("");
  const [EmpName, setEmpName] = useState("");
  const [EmpDep, setEmpDep] = useState("");

  const [resDep, setResDep] = useState([]);
  useEffect(() => {
    api.fetchDepartments().then((res) => {
      setResDep(res.data);
    });
  }, []);

  const createText = (data) => {
    setResDep([...resDep, data]);
  };

  const deleteText = (data) => {
    console.log(data);
    setResDep(resDep.filter(item => item.DepartmentId !== data))
    // console.log(resDep.filter(item => item.DepartmentId !== data));
    // console.log("...resDep", ...resDep.filter((e) => (e !== data)));
  };

  const [resEmp, setResEmp] = useState([]);
  // useEffect(() => {
  //   api.fetchEmployee().then((res) => {
  //     setResEmp(res.data);
  //     console.log(res.data);
  //   })
  // }, [])
  const temp = (data) => {
    setResEmp([...resEmp, data])
    console.log("resEmp", resEmp);
    console.log("data", data);
  };

  return (
    <div>
      <FormDep
        DepId={DepId}
        setDepId={setDepId}
        DepName={DepName}
        setDepName={setDepName}
        createText={createText}
      />
      <FormEmp 
        EmpId={EmpId}
        setEmpId={setEmpId}
        EmpName={EmpName}
        setEmpName={setEmpName}
        EmpDep={EmpDep}
        setEmpDep={setEmpDep}
        temp={temp}/>
      <ListDep data={resDep}
               deleteText={deleteText} />
      <ListEmp data={resEmp} />
      <HelloWorld />
    </div>
  );
}

export default App;


