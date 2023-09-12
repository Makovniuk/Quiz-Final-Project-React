import axios from '../service'

const quizs = {
	get: () => axios.get('/quiz-category')
		.then(({ data }) => data)
		.catch((err) => {
			throw new Error(err);
		}),
	post: (params) => axios.post('/quiz-category', params)
  	.then(({ data }) => data)
  	.catch((err) => {
    throw new Error(err);
  }),
};

export { quizs };