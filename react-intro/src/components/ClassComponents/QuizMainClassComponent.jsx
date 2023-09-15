import { Grid } from "@mui/material";
import React, { Component } from "react";
import { quizs } from "../../api/quizs/quizs";
import CardItemClassComponent from "../../components/ClassComponents/CardItemClassComponent";
import Progress from "../../components/Progress";

export default class QuizMainClassComponent extends Component {
  state = {
    quizList: [],
    loading: true,
    error: '',    
  }

  render() {
    const { quizList, loading, error } = this.state;

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

  componentDidMount() {
    this.fetchQuizList()
  }

  async fetchQuizList() {
    this.setState({ ...this.state, loading: true });

    try {
      const response = await quizs.get(); 
      this.setState({ ...this.state, quizList: response });
      console.log(this.state.quizList);
    
    } catch (err) {
      console.log(err);
      this.setState({ ...this.state, error: err });
    } finally {
      this.setState({ loading: false });
      console.log(this.state.quizList);
    }
  }  
}
    