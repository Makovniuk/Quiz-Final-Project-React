import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ModalWindow from "../modal/ModalWindow";


export default function CardItem({ quizCard }) {
  const [isShowModal, setShowModal] = useState(false);
 
  const handleShowModak = () => {
    setShowModal(!isShowModal);
  };

  return (
  <>
  <Grid item xs={12} md={5} spacing={4} >
     <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={quizCard.img}
          title={quizCard.nameQuiz}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {quizCard.nameQuiz}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {quizCard.description}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Играть</Button>
          <Button size="small" onClick={handleShowModak}>Показать детали</Button>
        </CardActions>
      </Card>
    </Grid>

    {isShowModal && <ModalWindow active={isShowModal} setActive={handleShowModak} content={quizCard} />}
    
  </>
 );
}