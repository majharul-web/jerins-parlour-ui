import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {
    const handleAddAdmin = () => { }
    const handleOnBlur = () => { }
    return (
        <div>
            <div style={{ margin: '0 auto' }}>
                <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Add New Service</h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box className='form-width' sx={{ border: '1px solid gray', borderRadius: '5px', padding: '20px 30px' }}>
                        <form onSubmit={handleAddAdmin} >
                            <TextField
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                label="New Admin Email"
                                variant="standard"
                                sx={{ my: 1 }}
                                fullWidth
                            />
                            <br />

                            <Button
                                variant='contained'
                                sx={{ my: 1 }}
                                type="submit">
                                Add Admin
                            </Button>
                        </form>
                    </Box>
                </div>
            </div>
        </div >
    );
};

export default MakeAdmin;