import React, { useEffect, useState } from "react";
import * as api from "../../api/index";
import { Modal, Button } from "react-bootstrap";
import reducerListDep from "../../reducers/reducerListDep";
import { createStore } from "redux"; //import redux library

const ListDep = (props) => {

  //intialize state
  const initialState = ('');
  //create redux store
  const store = createStore(reducerListDep, initialState); 

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [DepId, setDepId] = useState('');
  const [DepName, setDepName] = useState('');
  const [updateText, setUpdateText] = useState({DepartmentId: 0, DepartmentName: ""});

  useEffect(()=>{
    console.log("updateText: ", updateText);

    api.updateDepartments(updateText);
  }, [updateText])

  const handleDelete = (item) => {
    const newsId = item.DepartmentId;
    api.deleteDepartments(newsId);
    props.deleteText(newsId);
  };

  const handleEdit = (item) => {
    handleShow();
    const editID = item.DepartmentId;
    const editName = item.DepartmentName;
    // console.log("editID: ", editID);
    // console.log("editName", editName);
    setDepId(editID);
    setDepName(editName);
  };

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   setUpdateText({DepartmentId: parseInt(DepId), DepartmentName: DepName});
  //   window.location.reload();
  // }

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdateText({DepartmentId: parseInt(store.getsta), DepartmentName: DepName});
    window.location.reload();
  }

  return (
    <>
      <ul>
        {props.data?.map((item, index) => (
          <li key={index}>
            {item.DepartmentId} - {item.DepartmentName}
            <button onClick={() => handleDelete(item)}>Delete</button>
            <Button onClick={(() => handleEdit(item))}>Edit</Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal Update</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <span>DepartmentId: </span>
                <input defaultValue={DepId}
                    onChange={(e)=>{setDepId(e.target.value)}}></input>
                <br />
                <br />
                <span>DepartmentName: </span>
                <input defaultValue={DepName}
                  onChange={(e)=>{setDepName(e.target.value)}}></input>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListDep;
