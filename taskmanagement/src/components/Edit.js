import React, { useState, useEffect } from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './TaskList';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate} from "react-router-dom";


function Edit() {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = TaskList.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = TaskList [index];
        a.Task = task;
        a.Description = desc;

        history('/');
    }

    useEffect(() => {
        setTask(localStorage.getItem('Task'))
        setDesc(localStorage.getItem('Description'))
        setId(localStorage.getItem('Id'))
    }, [])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Task" value={task} required onChange={(e) => setTask(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDesc">
                    <Form.Control type="text" placeholder="Enter Description" value={desc} required 
                    onChange={(e) => setDesc(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
                </Form> 
        </div>
    )
    
}

export default Edit;