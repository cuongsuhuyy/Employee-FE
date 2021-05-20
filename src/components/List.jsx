import React, { useEffect, useState } from "react";
import * as api from "../api/index";

const List = (props) => {
  return (
    <>
      <ul>
        {props.data?.map((item, index) => (
          <li key={index}>
            {item.DepartmentId} - {item.DepartmentName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
