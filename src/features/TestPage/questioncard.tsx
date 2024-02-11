// components/QuestionCard.tsx
import React from "react";

interface Answer {
  id: number;
  answer: string;
  correctAnswer: boolean;
}

interface Question {
  id: number;
  question: string;
  answer: Answer[];
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="mb-4 rounded-md bg-gray-200 p-4 shadow-md">
      <p className="mb-2 font-bold">{question.question}</p>
      <ul>
        {question?.answer?.map((answer, index) => (
          <li
            key={answer.id}
            className={`cursor-pointer ${
              answer.correctAnswer ? "text-green-500" : "text-red-500"
            }`}
            onClick={() => onAnswer(index)}
          >
            {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
