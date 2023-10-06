import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from '@mui/material';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/namespace
import { useDispatch } from 'react-redux';
import InputText from '../../components/Forms/InputText';
import { quizRules } from '../../constants';
import thunks from '../../store/services/quizs/thunks';

const QuizForm = () => {
  const {
    control,
    handleSubmit,
    getValues,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formDataQuiz, setFormDataQuiz] = useState({
    nameQuiz: '',
    description: '',
    img: '',
    isFavorite: false,
  });

  const createNewQuizObject = () => {
    const valuesFromForm = getValues();
    const updateformDataQuiz = {
      ...formDataQuiz,
      nameQuiz: valuesFromForm.nameQuiz,
      description: valuesFromForm.description,
      img: valuesFromForm.img,
    };

    setFormDataQuiz(updateformDataQuiz);
    return updateformDataQuiz;
  };

  const onSubmit = async () => {
    const postData = createNewQuizObject();
    try {
      await dispatch(thunks.postQuiz(postData));
      reset();
      setIsDialogOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Paper style={{ width: '800px', padding: '25px' }}>
      <h2>CREATE YOUR QUIZ</h2>
        <InputText
          fullWidth
          control={control}
          name='nameQuiz'
          rules={quizRules.nameQuiz}
          label='Quiz Name'
        />
        <InputText
          fullWidth
          control={control}
          name='description'
          rules={quizRules.description}
          label='Quiz Description'
        />
        <InputText
          fullWidth
          control={control}
          name='img'
          rules={quizRules.img}
          label='URL image'
        />
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>Create quiz</Button>
      </Paper>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>QUIZ CREATED</DialogTitle>
        <DialogContent>
          <p>Your quiz has been successfully created.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default QuizForm;
