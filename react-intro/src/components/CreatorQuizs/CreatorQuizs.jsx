import { Button } from '@mui/material';
import React from 'react';

export default function CreatorQuizs() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
        <Button variant="contained" style={{ fontSize: '20px' }}>CREATE NEW QUIZ</Button>
    </div>
  );
}
