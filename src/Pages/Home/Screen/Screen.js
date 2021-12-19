import { Container, Grid } from '@mui/material';
import React from 'react';

const Screen = () => {
    return (
        <div style={{ backgroundColor: '#FFF8F52' }}>
            <Container >


                <Grid container sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item md={6} sm={12} xs={12}>
                        <div>
                            <img style={{ width: '70%' }} src="https://i.ibb.co/8zqLSvF/Screen.png" alt="" />
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <div>
                            <h3 style={{ fontWight: 'bold', fontSize: '2em' }}>Let us handle  your <br /> screen  <span style={{ color: '#F63E7B' }} > Professionally</span>. </h3>

                            <p>Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. ... Practices that enhance appearance include the use of cosmetics, botulinum, exfoliation, fillers, laser resurfacing, microdermabrasion, peels, retinol therapy and ultrasonic skin treatment.</p>

                            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} >
                                <div>
                                    <h1 style={{ color: '#F63E7B', fontSize: '3rem' }}>500+</h1>
                                    <p>Happy Customer</p>
                                </div>
                                <div>
                                    <h1 style={{ color: '#F63E7B', fontSize: '3rem' }}>16+</h1>
                                    <p>Total Services</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Screen;