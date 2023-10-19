// import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
        <div style={{textAlign:"center", marginTop:"2%"}}>
            <h1 style={{color: '#9c1616'}}>Add toDo's Here</h1>
            <TextField style={{fontSize:"2rem", borderRadius:"12px"}} id="standard-basic" label="Standard" variant="standard" onChange={value} />
            <IconButton aria-label="delete" onClick={handleClick}>
                {/* <DeleteIcon /> */}
                <ArrowDropDownIcon style={{color:"white", fontSize:"2rem",backgroundColor:'#9c1616'}} />
            </IconButton >
        </div>
    )
}

export default Input
