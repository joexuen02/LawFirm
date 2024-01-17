import React, { useState } from "react";
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './TaskList';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate} from "react-router-dom";

function Add() {

    const[task, setTask] = useState('');
    const[desc, setDesc] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = task,
        b = desc;

        TaskList.push({id: uniqueId, Task: a, Description: b});

        history('/');
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Task" required onChange={(e) => setTask(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDesc">
                    <Form.Control type="text" placeholder="Enter Description" required 
                    onChange={(e) => setDesc(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
                </Form> 
        </div>
    )
}

export default Add;
