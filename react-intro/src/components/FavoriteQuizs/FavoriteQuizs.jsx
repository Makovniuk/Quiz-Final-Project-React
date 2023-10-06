import { Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapp } from '../../pages/QuizMain/styled';
import actions from '../../store/services/quizs/actions';
import CardItem from '../Cards/CardItem';

export default function FavoriteQuizs() {
  const [isFavoriteEmpty, setIsFavoriteEmpty] = useState(true);
  const { favorite } = useSelector((state) => state.quizsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavoriteEmpty(favorite.length === 0);
  }, [favorite]);

  const handleFavorite = (key) => {
    dispatch(actions.switcherFavorite(key));
    // eslint-disable-next-line no-console
    console.log(key);
  };

  return (
    <CardWrapp>
      {isFavoriteEmpty ? (
        <Paper style={{ width: '500px', padding: '25px' }}>
        <h2>NO FAVORITE QUIZZES YET</h2>
        </Paper>
      ) : (
        favorite.map((quizCardItem) => (
          <CardItem
            key={quizCardItem.id}
            quizCard={quizCardItem}
            handleFavorite={handleFavorite}
          />
        ))
      )}
    </CardWrapp>
  );
}
