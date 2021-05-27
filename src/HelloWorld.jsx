import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText, getText02 } from './actions/helloAction';
import { GET_TEXT } from './constants';

const HelloWorld  = () => {
    const { hello } = useSelector((state) => state.helloReducer)
    const { hello2 } = useSelector((state) => state.helloReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText());
    }, [])
    useEffect(() => {
        dispatch(getText02());
    }, [])
    // console.log("hello:", useSelector((state) => state.helloReducer));
    return (
        <>
            <h1>Hello { hello }</h1>
            <h1>Hello { hello2 }</h1>
        </>
    )
}

export default HelloWorld;