import React,{useEffect, useState}from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router";


export default function Nav(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Local states
    const [name,setName] = useState("");

    // First call to pagination when component is rendered- Listening the dispatch action 
    useEffect(()=>{
        dispatch(setPagination());  
    },[dispatch]);

    // --------Handlers----------
    function handleOnChange(event){
        event.preventDefault();
        setName(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        dispatch(GetRecipeName(name));
        navigate("./home")
    }

    return (
        // Search Component
        <div>
            <input type="text" placeholder="Buscar..." onChange={event => handleOnChange(event)}/>
            <button type="submit" onClick={event => handleSubmit(event)}>Buscar</button>
        </div>
    )
}