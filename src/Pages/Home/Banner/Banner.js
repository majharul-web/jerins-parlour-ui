import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#FFF8F52' }}>
            <Container >
                <Grid container sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item md={6} sm={12} xs={12}>
                        <div>
                            <h1 style={{ fontWight: 'bold', fontSize: '3em' }}>BEAUTY SALON FOR <br /> EVERY WOMEN</h1>
                            <p style={{ paddingRight: '10rem' }}>A beauty salon or beauty parlor is an establishment dealing with cosmetic treatments for men and women</p>
                            <Button variant="contained" style={{ backgroundColor: '#F63E7B', marginTop: '10px' }}>
                                Get Appointment
                            </Button>
                        </div>

                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <img style={{ width: '70%' }} src="https://i.ibb.co/LJGkkvK/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png" alt="" />
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div >
    );
};

export default Banner;