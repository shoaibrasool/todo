import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxWidth: 550,
}));


export default function List({ data, title, deleteTodo, checkTodo, condition }) {

    if (Array.isArray(data)) {
        return (
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, float: 'left' }}>
                <h1 style={{ color: '#9c1616' }}>{title}</h1>
                {data.map((data) => (
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            py: 2,
                            px: 10,
                            fontWeight: 'bold',
                            backgroundColor: "#9c1616",
                        }}
                    >
                        <Stack spacing={2} direction="row" alignItems="center" style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                            <Typography sx={{ color: "white", fontWeight: 'bold', float: "left" }}>{data.toUpperCase()}</Typography>
                            {condition && (
                                <>
                                    <DeleteIcon
                                        onClick={() => {
                                            deleteTodo(data);
                                        }}
                                        style={{ color: "white", cursor: "pointer" }}
                                    />
                                    <CheckIcon
                                        onClick={() => {
                                            checkTodo(data);
                                        }}
                                        style={{ color: "white", marginLeft: "20px", cursor: "pointer"  }}
                                    />
                                </>
                            )}
                            {!condition && (
                                <>
                                    <UndoIcon
                                        onClick={() => {
                                            
                                        }}
                                        style={{ color: "white", cursor: "pointer"  }}
                                    />
                                </>
                            )}

                        </Stack>
                    </Item>
                ))}
            </Box>
        );
    }


}
