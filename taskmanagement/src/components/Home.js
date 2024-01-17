import './Home.css';
import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './TaskList';
import {Link, useNavigate} from 'react-router-dom';

function Home() {

    let history = useNavigate();

    const handleView = (task, description) => {
        alert(`Task: ${task}\nDescription: ${description}`);
    }

    const handleEdit = (id, task, description) =>{
        localStorage.setItem('Task', task);
        localStorage.setItem('Description', description);
        localStorage.setItem('Id', id);
    }

    const handleDelete = (id) => {
        var index = TaskList.map(function(e){
            return e.id
        }).indexOf(id);

        TaskList.splice(index,1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Task
                            </th>
                            <th className="desc-column">
                                Description
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TaskList && TaskList.length > 0
                            ?
                            TaskList.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Task}
                                        </td>
                                        <td>
                                            {item.Description}
                                        </td>
                                        <td>
                                            <Button onClick={() => handleView(item.Task, item.Description)}>View</Button>
                                            &nbsp;
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.Task, item.Description)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className="d-grid gap-2" to='/create'>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;