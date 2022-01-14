import { useState, useEffect } from "react";
import React from "react";
import axios from "../services/backendApi.js";
import { Link } from 'react-router-dom';

const Login = (props) => {

    /*const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const GetComments = () =>{
        axios.get(`/comments/${props.match.params.contactID}`).then(res => {
        setComments(res.data);
        setComment(res.data[0]);
        });
    }*/
    useEffect(() => {
        //GetComments();
    }, [])
	return;
}


export default Login;