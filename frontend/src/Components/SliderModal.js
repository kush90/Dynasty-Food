import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, IconButton, Tooltip, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Close } from '@mui/icons-material';

const ImageSliderModal = ({ images, openModal, closeModal }) => {
    const [open, setOpen] = useState(openModal);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClose = () => {
        setOpen(false);
        closeModal(false);
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <>
            {/* <Button variant="outlined" onClick={handleOpen}>Open Image Slider</Button> */}
            <Dialog open={open} onClose={handleClose} TransitionComponent={Slide} maxWidth="md" fullWidth>
                <DialogTitle>
                    <Tooltip title="close">
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <Close />
                        </IconButton>
                    </Tooltip>
                    <span style={{ textAlign: 'center', color: '#781fde', fontSize: '16px', marginLeft: '10px' }}>Image Preview</span>

                </DialogTitle>
                <DialogContent>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px',
                            }}
                        >
                            {currentImageIndex + 1} / {images.length}
                        </span>
                    </div>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Tooltip title="Previous">
                            <Button onClick={handlePrev} variant="contained" color="primary" disabled={currentImageIndex === 0} sx={{
                                position: 'absolute', left: 40, top: '55%', transform: 'translateY(-55%)', minWidth: 'auto',
                                padding: 0, '&:disabled': {
                                    color: 'rgba(255, 255, 255, 0.3)', // Customize the text color for disabled state
                                    cursor: 'not-allowed', // Customize the cursor for disabled state
                                    // Add any additional styles for disabled state
                                    backgroundColor: 'rgba(120, 31, 222, 0.3)', // Background color with opacity (50%)

                                },
                            }}>

                                <NavigateBeforeIcon />
                            </Button>
                    </Tooltip>
                    <Tooltip title="Next">
                            <Button onClick={handleNext} variant="contained" color="primary" disabled={currentImageIndex === images.length - 1} sx={{
                                position: 'absolute', right: 40, top: '55%', transform: 'translateY(-55%)', minWidth: 'auto',
                                padding: 0, '&:disabled': {
                                    color: 'rgba(255, 255, 255, 0.3)', // Customize the text color for disabled state
                                    cursor: 'not-allowed', // Customize the cursor for disabled state
                                    // Add any additional styles for disabled state
                                    backgroundColor: 'rgba(120, 31, 222, 0.3)', // Background color with opacity (50%)

                                },
                            }}>

                                <NavigateNextIcon />
                            </Button>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ImageSliderModal;
