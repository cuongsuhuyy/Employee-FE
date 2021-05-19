import React from "react"
import List from "./List";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.taget.value);
        setInputText(e.taget.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()},
        ]);
        setInputText("");
    }
    
    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className=""
                placeholder="DepartmentID"></input>
            <button onClick={submitTodoHandler} className="" type="submit">
                +
            </button>
            <List />
        </form>
    )
    
};

export default Form;