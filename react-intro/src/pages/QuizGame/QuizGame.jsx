/* eslint-disable no-tabs */
import { Box, Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Progress from '../../components/Progress/Progress';
import thunks from '../../store/services/quizGame/thunks';

export default function QuizGame() {
  const navigate = useNavigate();
  const { topic } = useParams();
  const { quizGame } = useSelector((state) => state.quizGameReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timerSecond, setTimerSecond] = useState(0);
  const [timerMinute, setTimerMinute] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startTimer = () => {
    const changeSecond = () => setTimerSecond(timerSecond + 1);
    const timerId = setTimeout(() => {
      changeSecond();
    }, 1000);

    if (showScore) clearTimeout(timerId);

    if (timerSecond >= 60) {
      setTimerMinute(timerMinute + 1);
      setTimerSecond(timerSecond - 60);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizGame.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const fetchQuestionList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchQuizGame(topic));
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch, topic]);

  const handleNavigate = (path) => {
    // eslint-disable-next-line no-unused-expressions
    path ? navigate(`/QuizMain/${path}`) : navigate('/QuizMain/');
  };

  useEffect(() => { fetchQuestionList(); }, [fetchQuestionList]);
  useEffect(() => { startTimer(); }, [startTimer, timerSecond]);

  if (loading) return <Progress />;
  if (error) return <p>{error}</p>;

  return (
    <div className='app'>
      {showScore ? (
        <div>
          <h2>Your scored <span
          style={{ color: 'green' }}>{score}</span> out of <span
          style={{ color: 'red' }}>{quizGame.length}</span></h2>
          <h2>Your time {timerMinute} m : {timerSecond} s</h2>
          <div className='score-section'>
            <Button
              component="label"
              variant="contained"
              className='button-quiz'
              onClick={() => handleNavigate('quizTopic/kino/')}>Повторить игру
            </Button>
            <Button
              component="label"
              variant="contained"
              className='button-quiz'
              onClick={() => handleNavigate()}>Выбрать другой квиз
            </Button>
          </div>
        </div>
      ) : (
          <Box>
            <div className='timer-text'>
            <h4 style={{ color: 'white' }}>TIMER {timerMinute}:{timerSecond}</h4>
            </div>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{quizGame.length}
              </div>
              <div className='question-text'><h3>{quizGame[currentQuestion].questoinText}</h3></div>
             </div>
             <div className='answer-section'>
                {quizGame[currentQuestion].answerOptions.map((answerOption) => (
                  <button key={answerOption.id} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                  </button>
                ))}
              </div>
          </Box>
      )}
    </div>
  );
}
