import { Button, Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1976D2', color: 'black', marginTop: '20px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '6em' }}>
                        <p>Emergency Services</p>
                        <p>Checkup</p>
                        <p>Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Checkup</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '2em' }}>
                        <h3>Company</h3>
                        <p>Emergency Services</p>
                        <p>Checkup</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '2em' }}>
                        <h3 className='footer-title'>Quick Links</h3>
                        <p>Rentals</p>
                        <p>Sales</p>
                        <p>Contact</p>
                        <p>Blogs</p>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '2em' }}>
                        <h3 className='footer-title'>Our Address</h3>
                        <p>MogorPara-5280 Dinajpur,<br />Bangladesh</p>
                        <div style={{ marginTop: '3em' }}>
                            <p>Call Now</p>
                            <Button variant="contained" style={{ backgroundColor: '#F63E7B' }}>
                                +222 88852
                            </Button>

                        </div>
                    </Grid>

                </Grid>
                <p style={{ textAlign: 'center', paddingBottom: '20px' }}>Copyright @2021 All Right Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;