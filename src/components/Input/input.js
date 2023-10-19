import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

const Input = ({ data, setData }) => {

    const [task, setTask] = useState();

    const value = (e) => {
        setTask(e.target.value);
    }

    const handleClick = () => {
        if (task !== "") {
            setData([task, ...data]);
        }
    }

    return (
        <div>
            <h1>Add toDo's Here</h1>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={value} />
            <IconButton aria-label="delete" onClick={handleClick}>
                <DeleteIcon />
            </IconButton >
        </div>
    )
}

export default Input
