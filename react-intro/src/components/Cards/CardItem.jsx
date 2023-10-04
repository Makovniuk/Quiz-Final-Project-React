import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModalWindow from '../modal/ModalWindow';

export default function CardItem({ quizCard, handleNavigate }) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModak = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
        <Card sx={{ maxWidth: 300, marginBottom: '30px' }}>
          <CardMedia
            sx={{ minHeight: 180 }}
            image={quizCard.img}
            title={quizCard.nameQuiz}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {quizCard.nameQuiz}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {quizCard.description.substr(0, 50)}...
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" aria-label="add to favorites">
              <FavoriteIcon color='red' />
            </IconButton>
            <Button
              component="label"
              size="small"
              onClick={() => handleNavigate(quizCard.topicQuiz)}>Играть
            </Button>
            <Button
              component="label"
              size="small"
              onClick={handleShowModak}>Подробнее
            </Button>
          </CardActions>
        </Card>
      {isShowModal && <ModalWindow
        active={isShowModal}
        setActive={handleShowModak}
        content={quizCard}
        handleNavigate={handleNavigate}
      />}
    </>
  );
}
