import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const images = [
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
];

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        let intervalId;
        if (autoplay) {
            intervalId = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, 5000); // Change the interval time as needed (5 seconds in this example)
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [autoplay]);

    const toggleAutoplay = () => {
        setAutoplay((prevAutoplay) => !prevAutoplay);
    };


    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <img src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
                {!autoplay && (
                    <>
                        <Button onClick={handlePrev} variant="contained" color="primary" disabled={activeIndex === 0} sx={{
                            position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', '&:disabled': {
                                color: 'rgba(255, 255, 255, 0.3)', // Customize the text color for disabled state
                                cursor: 'not-allowed', // Customize the cursor for disabled state
                                // Add any additional styles for disabled state
                                backgroundColor: 'rgba(120, 31, 222, 0.3)', // Background color with opacity (50%)

                            },
                        }}>
                            Previous
                            <NavigateBeforeIcon />
                        </Button>
                        <Button onClick={handleNext} variant="contained" color="primary" disabled={activeIndex === images.length - 1} sx={{
                            position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', '&:disabled': {
                                color: 'rgba(255, 255, 255, 0.3)', // Customize the text color for disabled state
                                cursor: 'not-allowed', // Customize the cursor for disabled state
                                // Add any additional styles for disabled state
                                backgroundColor: 'rgba(120, 31, 222, 0.3)', // Background color with opacity (50%)

                            },
                        }}>
                            Next
                            <NavigateNextIcon />
                        </Button>
                    </>
                )}
                <Button onClick={toggleAutoplay} variant="contained" color="primary" sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', fontSize: '.875rem' }}>
                    {autoplay ? 'Auto Pause' : 'Auto Play'}
                    {autoplay ? <PauseIcon /> : <PlayArrowIcon />}
                </Button>
            </Box>
        </Box>
    );
};

export default ImageSlider;