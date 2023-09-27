import axios from '../service';

const topicQuiz = {
  get: (topic) => axios.get(`/${topic}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { topicQuiz };
