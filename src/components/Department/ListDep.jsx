import React, { useState } from "react";
import * as api from "../../api/index";
import { Modal, Button } from "react-bootstrap";

const ListDep = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [DepId, setDepId] = useState('');
  const [DepName, setDepName] = useState('');

  const handleDelete = (item) => {
    const newsId = item.DepartmentId;
    api.deleteDepartments(newsId);
    props.deleteText(newsId);
  };

  const handleEdit = (item) => {
    handleShow();
    const editID = item.DepartmentId;
    const editName = item.DepartmentName;
    console.log(editID);
    setDepId(editID);
    setDepName(editName);
    props.DepId = {DepId}
    console.log("setData: ", setDepId);
    console.log("Data: ", DepId);
    console.log("setData: ", setDepName);
    console.log("Data: ", DepName);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // props.DepName(setDepName);
    console.log("DepId: ", DepId);
    props.aaa = [DepId];
    // console.log(props.DepName);
    // props.setUpdateDep = { DepartmentId: parseInt(DepId), DepartmentName: DepName };
    api.updateDepartments(props.setUpdateDep)
    // console.log(props.setUpdateDep);
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
                <input defaultValue={props.DepId}
                    onChange={()=>{}}></input>
                <br />
                <br />
                <span>DepartmentName: </span>
                <input defaultValue={props.DepName}
                  onChange={()=>{}}></input>
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
