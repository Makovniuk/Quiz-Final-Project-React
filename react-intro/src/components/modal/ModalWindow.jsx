import React from 'react';
import {
  Button, CardMedia, Paper, Typography,
} from '@mui/material';
import { ModalWrapper } from './styled';

export default function ModalWindow({ setActive, content, handleNavigate }) {
  const closeModal = () => {
    setActive();
  };

  return (
    <ModalWrapper>
      <Paper style={{ width: '400px', padding: '15px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {content.nameQuiz}
        </Typography>
        <Typography component="div" style={{ padding: '15px' }}>
        {content.description}
        </Typography>
        <CardMedia
          sx={{ height: 300 }}
          image={content.img}
        />
        <Button onClick={closeModal}>Закрыть</Button>
        <Button onClick={() => handleNavigate(content.topicQuiz)}>Играть</Button>
      </Paper>
    </ModalWrapper>
  );
}
