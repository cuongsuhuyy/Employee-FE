import { useEffect, useState } from "react";
import CallApi from "./api/CalApi";
import Form from "./components/Form";
import FormEmp from "./components/Employee/FormEmp.jsx";
import * as api from "./api/index";
import List from "./components/List";

function App() {
  const [DepId, setDepId] = useState("");
  const [DepName, setDepName] = useState("");

  const [res, setRes] = useState([]);
  useEffect(() => {
    api.fetchDepartments().then((res) => {
      setRes(res.data);
    });
  }, []);
  const createText = (data) => {
    setRes([...res, data]);
  };
  return (
    <div>
      <CallApi />
      <Form
        DepId={DepId}
        setDepId={setDepId}
        DepName={DepName}
        setDepName={setDepName}
        createText={createText}
      />
      <FormEmp />
      <List data={res} />
    </div>
  );
}

export default App;
