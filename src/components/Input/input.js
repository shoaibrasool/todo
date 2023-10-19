import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'

const Input = ({ data, setData , showData }) => {

    const [task, setTask] = useState();

    const value = (e) => {
        setTask(e.target.value);
    }

    const handleClick = () => {
        if (task !== ""){
            data.push(task);
        }
    }

    return (
        <div>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={value} />
            <IconButton aria-label="delete" onClick={handleClick}>
                <DeleteIcon />
            </IconButton >
            <h1>CHECK</h1>
        </div>
    )
}

export default Input
