import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({ service }) => {
    const { name, price, image, description } = service;
    console.log(service)
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: '40px' }}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100px', height: '100px', margin: '10px auto' }}
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 16, textAlign: 'center', color: '#F63E7B' }} gutterBottom>
                        $ {price}
                    </Typography>

                    <Typography sx={{ fontSize: 14, mb: 1.5, textAlign: 'center' }} color="text.secondary">
                        {description}
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="outlined" sx={{ backgroundColor: "#F63E7B", color: 'black' }}>Book Now</Button>
                    </div>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;