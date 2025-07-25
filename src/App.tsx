import { useState, useCallback, useEffect } from 'react'
import {  Box, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import cat2 from '/Cat Love All GIF - Cat Love All - Discover & Share GIFs.gif'
import cat1 from '/peach-goma-love-heart-dance.gif'
//import './App.css'

import Particles from 'react-particles';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

import type { Engine } from 'tsparticles-engine';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFireworksPreset(engine);
  }, []);

  const ParticlesOptions = {
    preset: 'fireworks',
    fullScreen: { enable: false },
    // interactivity: {
    //   detectsOn: 'canvas',
    //   //events: { onClick: { enable: true, mode: 'explode' } },
    // },
    sounds: {
      enable: false,
    },
  };

  const computeDays = () => {
    const start = new Date('2025-03-22T00:00:00').getTime();
    const now = Date.now();
    const diffMs = now - start;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return days;
  };

  const [days, setDays] = useState(computeDays());

  useEffect(() => {
    const timer = setInterval(() => {
      setDays(computeDays());
    }, 60 * 60 * 1000); // update every hour

    return () => clearInterval(timer);
  }, []);



  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
        }}
      >
        <Particles
          options={ParticlesOptions}
          init={particlesInit}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        />
        <Box
          component="img"
          src={cat1} // Path to your top-left image in the public folder
          alt="Top Left"
          sx={{
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '220px', // Adjust size as needed
            height: 'auto',
          }}
        />

        {/* Centered text */}
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'whitesmoke', // Optional: Set text color
          }}
        >
          <FavoriteIcon fontSize="large" sx={{ color: '#fa558c' }} /> Te amo mi amorcita preciosa bella <FavoriteIcon fontSize="large" sx={{ color: '#fa558c' }} />
        </Typography>

        {/* Bottom-right image */}
        <Box
          component="img"
          src={cat2} // Path to your bottom-right image in the public folder
          alt="Bottom Right"
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '15%',
            width: '240px', // Adjust size as needed
            height: 'auto',
          }}
        />
        <Typography variant="h5" sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'whitesmoke', // Optional: Set text color
        }}>Han pasado {days} dias desde que somos novios </Typography>
      </Box>
    </>
  )
}

export default App
