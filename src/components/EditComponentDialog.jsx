import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const EditComponentDialog = ({ open, handleClose, component, handleSave }) => {
    const [editData, setEditData] = useState(component);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const saveChanges = () => {
        handleSave(editData);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Component</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    name="title"
                    fullWidth
                    variant="standard"
                    value={editData.title}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Subtitle"
                    name="subtitle"
                    fullWidth
                    variant="standard"
                    value={editData.subtitle}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    fullWidth
                    variant="standard"
                    value={editData.description}
                    onChange={handleChange}
                />
                {/* Add other fields as necessary */}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={saveChanges}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditComponentDialog;
