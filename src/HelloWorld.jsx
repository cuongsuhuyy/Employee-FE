import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from './actions/helloAction';
import { GET_TEXT } from './constants';

const HelloWorld  = () => {
    const { hello } = useSelector((state) => state.helloReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText());
    }, [])
    // console.log("hello:", useSelector((state) => state.helloReducer));
    return (
        <>
            <h1>Hello { hello }</h1>
        </>
    )
}

export default HelloWorld;