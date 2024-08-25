import React, { useState, useEffect } from 'react';
import { Card, CardContent, Tabs, Tab, Box, Typography, Divider, IconButton } from '@mui/material';
import CopyAllIcon from '@mui/icons-material/CopyAll'; // MUI icon for copy
import EditIcon from '@mui/icons-material/Edit'; // MUI icon for edit
import DeleteIcon from '@mui/icons-material/Delete'; // MUI icon for delete
import EditComponentDialog from './EditComponentDialog'; // Import the EditComponentDialog component
import DeleteConfirmationDialog from './DeleteConfirmationDialog'; // Import the DeleteConfirmationDialog component

const ComponentCard = ({ component, onEdit, onDelete }) => {
    const [activeTab, setActiveTab] = useState('html');
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [tempComponent, setTempComponent] = useState(component); // Local state for temporary data

    useEffect(() => {
        setTempComponent(component); // Reset temporary component data when component prop changes
    }, [component]);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        }).catch((err) => {
            console.error('Failed to copy code: ', err);
        });
    };

    const handleEditClick = () => {
        setOpenEditDialog(true);
    };

    const handleDeleteClick = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleSaveChanges = (updatedComponent) => {
        setTempComponent(updatedComponent); // Update local state
        handleCloseEditDialog();
    };

    const handleConfirmDelete = () => {
        // Simulate deletion by resetting tempComponent
        setTempComponent(null); // Or handle appropriately if you need to keep track of deleted items
        handleCloseDeleteDialog();
    };

    return (
        <Card
            variant="outlined"
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '1100px', // Increased width
                height: '700px', // Maintained height
                margin: '20px auto', // Centered and symmetric margin
                padding: '20px', // Symmetric padding
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Shadow for separation
            }}
        >
            <CardContent>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Typography variant="h6">{tempComponent ? tempComponent.title : 'Deleted Component'}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {tempComponent ? tempComponent.subtitle : ''}
                        </Typography>
                    </Box>
                    <Box>
                        {tempComponent && (
                            <>
                                <IconButton onClick={handleEditClick} style={{ color: '#1976d2' }}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={handleDeleteClick} style={{ color: '#d32f2f' }}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Box>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                    {tempComponent ? tempComponent.description : ''}
                </Typography>
            </CardContent>
            <Divider />
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: 'calc(100% - 80px)', // Adjust height for the content
                    marginTop: '10px', // Space between content and tabs
                    overflow: 'hidden',
                }}
            >
                <Box
                    style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        padding: '10px',
                    }}
                >
                    {tempComponent && (
                        <iframe
                            src={tempComponent.output}
                            title={tempComponent.title}
                            style={{ width: '100%', height: '100%', border: 'none' }}
                        />
                    )}
                </Box>
                <Box
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px',
                        overflowY: 'auto',
                        backgroundColor: '#f5f5f5',
                    }}
                >
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="HTML" value="html" />
                        <Tab label="CSS" value="css" />
                        <Tab label="JS" value="js" />
                    </Tabs>
                    <Box
                        style={{
                            flex: 1,
                            padding: '10px',
                            overflowY: 'auto',
                            whiteSpace: 'pre-wrap',
                            backgroundColor: '#ffffff',
                            borderRadius: '4px',
                            border: '1px solid #ddd',
                            marginTop: '10px',
                            position: 'relative',
                        }}
                    >
                        {tempComponent && tempComponent.code[activeTab] && (
                            <pre>{tempComponent.code[activeTab]}</pre>
                        )}
                        <IconButton
                            onClick={() => copyToClipboard(tempComponent ? tempComponent.code[activeTab] : '')}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                color: '#1976d2',
                            }}
                        >
                            <CopyAllIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            {/* Edit Component Dialog */}
            <EditComponentDialog
                open={openEditDialog}
                handleClose={handleCloseEditDialog}
                component={tempComponent}
                handleSave={handleSaveChanges}
            />

            {/* Delete Confirmation Dialog */}
            <DeleteConfirmationDialog
                open={openDeleteDialog}
                handleClose={handleCloseDeleteDialog}
                handleConfirm={handleConfirmDelete}
            />
        </Card>
    );
};

export default ComponentCard;
