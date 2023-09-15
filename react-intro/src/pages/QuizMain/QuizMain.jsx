import { Grid } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { quizs } from "../../api/quizs/quizs";
// import CardItem from "../../components/Cards/CardItem";
import CardItemClassComponent from "../../components/ClassComponents/CardItemClassComponent";
import Progress from "../../components/Progress";

export default function QuizMain() {
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

  useEffect(() => {fetchQuizList()}, []);

  if (loading) return <Progress />;
  if (error) return <p>{error}</p>;

	return (
    <>
      <Grid container spacing={6}>
        {quizList.map((quizCardItem) => (
          <CardItemClassComponent  key={quizCardItem.id} quizCard = {quizCardItem} />
        ))}
      </Grid>
    </>
  );
}
