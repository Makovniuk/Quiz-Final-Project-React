const ruleTexts = {
  required: 'Field is required',
  minLength: (length) => `Filed should have more then ${length} symbols`,
  maxLength: (length) => `Filed should have less then ${length} symbols`,
};

export const quizRules = {
  nameQuiz: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 15, message: ruleTexts.minLength(15) },
    maxLength: { value: 30, message: ruleTexts.maxLength(30) },
  },
  description: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 20, message: ruleTexts.minLength(20) },
    maxLength: { value: 500, message: ruleTexts.maxLength(500) },
  },
  img: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 10, message: ruleTexts.minLength(10) },
    maxLength: { value: 200, message: ruleTexts.maxLength(200) },
  },
};
