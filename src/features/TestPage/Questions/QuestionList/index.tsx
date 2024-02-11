import React from "react";

interface QuestionListProps {
  questions: any;
  setCurrentQuestionIndex: (index: number) => void;
  currentQuestionIndex: number;
  userAnswers: string[]; // Assuming userAnswers is an array of strings
}

const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  userAnswers,
}) => {
  // const isCurrentQuestion = (index: number): boolean =>
  //   index === currentQuestionIndex;

  // const isAnsweredCorrectly = (questionIndex: number): boolean => {
  //   if (questionIndex >= 0 && questionIndex < questions?.data.length) {
  //     const question = questions?.data[questionIndex];
  //     return (
  //       userAnswers[currentQuestionIndex] &&
  //       question.attributes.answer.some(
  //         (a: any) =>
  //           a.answer === userAnswers[currentQuestionIndex] && a.correctAnswer
  //       )
  //     );
  //   }
  //   return false;
  // };

  // const determineQuestionStatus = (index: number): string => {
  //   if (isCurrentQuestion(index)) {
  //     return "bg-slate-300";
  //   }

  //   if (index < currentQuestionIndex) {
  //     // Previous question
  //     return isAnsweredCorrectly(index) ? "bg-green-300" : "bg-red-300";
  //   }

  //   return "bg-white";
  // };

  // const getCorrectnessMessage = (questionIndex: number): string =>
  //   isAnsweredCorrectly(questionIndex) ? "Correct" : "Wrong";

  return (
    <div className="grid grid-cols-5 gap-4">
      {questions?.data?.map((question: any, index: number) => (
        <div key={index}>
          <span
            className={`mb-2 cursor-pointer rounded border p-2 text-center ${index}`}
            onClick={() => setCurrentQuestionIndex(index)}
          >
            {index < 9 ? "0" : ""}
            {index + 1}
            {/* {index !== currentQuestionIndex && (
              <span className="ml-2">{(index)}</span>
            )} */}
          </span>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
