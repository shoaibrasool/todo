import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import { Data } from './data';


const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxWidth: 550,
}));


export default function List({ data, title }) {

    if (Array.isArray(data)) {
        return (
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, float: 'left' }}>
                <h1 style={{ color: "black" }}>{title}</h1>
                {data.map((data) => (
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            p: 2,
                            fontWeight: 'bold',
                        }}
                    >
                        <Stack spacing={2} direction="row" alignItems="center" style={{ position: "relative" }}>
                            <div >
                                <Typography sx={{ color: '#9c1616', fontWeight: 'bold' }}>{data}</Typography>
                            </div>
                        </Stack>
                    </Item>
                ))}
            </Box>
        );
    }


}
