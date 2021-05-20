import { useState } from "react";
import CallApi from "./api/CalApi";
import Form from "./components/From";

function App() {
  const [DepId, setDepId] = useState("");
  const [DepName, setDepName] = useState("");

  return (
    <div>
      <CallApi />
      <Form DepId={DepId}
            setDepId={setDepId}
            DepName={DepName}
            setDepName={setDepName}/>
    </div>
  );
}

export default App;
