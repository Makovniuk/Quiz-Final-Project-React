import { Grid } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizs } from '../../api/quizs/quizs';
import CardItem from '../../components/Cards/CardItem';
import Progress from '../../components/Progress/Progress';

export default function QuizMain() {
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQuizList = useCallback(async () => {
    setLoading(true);

    try {
      const response = await quizs.get();
      setQuizList(response);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setQuizList, setError, setLoading]);

  useEffect(() => { fetchQuizList(); }, [fetchQuizList]);

  const handleNavigate = (quizTopic) => {
    navigate(`/QuizMain/quizTopic/${quizTopic}`);
  };

  if (loading) return <Progress />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Grid container spacing={2}>
        {quizList.map((quizCardItem) => (
          <CardItem
            key={quizCardItem.id}
            quizCard = {quizCardItem}
            handleNavigate={handleNavigate}
          />
        ))}
      </Grid>
    </>
  );
}
