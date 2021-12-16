import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import logo from '../../images/Group 33092.png'

const Navigation = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar >
                    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <img src={logo} width={100} alt="" />
                        </Box>
                        <Box>
                            <Button color="inherit">Login</Button>
                        </Box>

                    </Container>
                </Toolbar>
            </AppBar>
        </Box>

    );
};

export default Navigation;