import { Alert, Box, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import logo from '../../../images/Group 33092.png';
import google from '../../../images/Icon/google.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { singInUsingGoogle, loginWithEmailPass, isLoading, authError } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    console.log(loginData)

    const handleLoginSubmit = e => {
        loginWithEmailPass(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }

    const googleSingIn = () => {
        singInUsingGoogle(location, navigate)
    }
    return (
        <Box>
            <div style={{ textAlign: 'center', margin: '20px 0 0 10px' }}>
                <img style={{ width: '200px' }} src={logo} alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <div style={{ margin: '0 auto' }}>
                            <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Login</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ border: '1px solid gray', borderRadius: '5px', width: '40%', padding: '20px 30px' }}>
                                    <form onSubmit={handleLoginSubmit} >

                                        <br />
                                        <TextField
                                            type="email"
                                            name="email"
                                            onBlur={handleOnBlur}
                                            label="Email"
                                            variant="standard"
                                            sx={{ my: 1 }}
                                            fullWidth
                                        />
                                        <br />

                                        <TextField
                                            type="password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                            label="Password"
                                            variant="standard"
                                            sx={{ my: 1 }}
                                            fullWidth
                                        />
                                        <br />

                                        <Button
                                            variant='contained'
                                            sx={{ my: 1 }}
                                            type="submit">
                                            Register
                                        </Button>
                                    </form>
                                    <br />
                                    <p style={{ textAlign: 'center' }}>
                                        Don't have an account?
                                        <Link to='/register'>Go to Register</Link>
                                    </p>
                                    <br />
                                    {isLoading &&
                                        <div style={{ textAlign: 'center' }}>
                                            <CircularProgress color="success" />
                                        </div>

                                    }

                                    {
                                        authError &&
                                        <Alert severity="error">{authError}</Alert>
                                    }

                                </Box>
                            </div>

                        </div>
                    </div >
                </div>
                <div style={{ padding: '15px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button className='google-button' onClick={googleSingIn}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <img style={{ width: '20px' }} src={google} alt="" />
                                </div>
                                <div style={{ margin: '0 7px' }}>
                                    Continue with Google
                                </div>
                            </div>
                        </button>
                    </div>

                </div>
            </div>

        </Box>
    );
};

export default Login;