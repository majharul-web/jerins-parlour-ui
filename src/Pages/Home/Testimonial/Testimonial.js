import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Testimonial = ({ review }) => {
    console.log(review)
    const { name, image, rating, description, designation } = review;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: '40px' }}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>

                <CardMedia
                    component="img"
                    style={{ width: '100px', height: '100px', margin: '0 auto' }}
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 12, textAlign: 'center' }} color="text.secondary" gutterBottom>
                        {designation}
                    </Typography>

                    <Typography sx={{ fontSize: 14, mb: 1.5, textAlign: 'center' }} color="text.secondary">
                        {description}
                    </Typography>
                    <div style={{ textAlign: 'center' }}>
                        <Rating name="half-rating-read" defaultValue={parseInt(rating)} readOnly />
                    </div>

                </CardContent>

            </Card>

        </Grid>
    );
};

export default Testimonial;