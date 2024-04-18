import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, IconButton, Tooltip } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, Close } from '@mui/icons-material';

const ImageSliderModal = ({ images, openModal, closeModal }) => {
    const [open, setOpen] = useState(openModal);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClose = () => {
        setOpen(false)
        closeModal(false)
    }
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
                </DialogTitle>
                <DialogContent>
                    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                    <Tooltip title="Prev">
                        <span>
                            <IconButton onClick={handlePrev} aria-label="previous" disabled={currentImageIndex === 0}>
                                <KeyboardArrowLeft />
                            </IconButton>
                        </span>
                    </Tooltip>
                    <Tooltip title="Next">
                        <span>
                            <IconButton onClick={handleNext} aria-label="next" disabled={currentImageIndex === images.length - 1}>
                                <KeyboardArrowRight />
                            </IconButton>
                        </span>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ImageSliderModal;
