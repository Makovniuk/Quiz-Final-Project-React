import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardItem from '../../components/Cards/CardItem';
import Progress from '../../components/Progress/Progress';
import thunks from '../../store/services/quizs/thunks';
import { CardWrapp } from './styled';

export default function QuizMain() {
  const { quizs, filter, filtredQuizes } = useSelector((state) => state.quizsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const quizList = useMemo(() => (filter ? filtredQuizes : quizs), [filter, filtredQuizes, quizs]);

  const fetchQuizList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchQuizs());
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => { fetchQuizList(); }, [fetchQuizList]);

  const handleNavigate = (quizTopic) => {
    navigate(`/QuizMain/quizTopic/${quizTopic}`);
  };

  if (loading) return <Progress />;
  if (error) return <p>{error}</p>;

  return (
    <CardWrapp>
        {quizList.map((quizCardItem) => (
          <CardItem
            key={quizCardItem.id}
            quizCard = {quizCardItem}
            handleNavigate={handleNavigate}
          />
        ))}
    </CardWrapp>
  );
}
