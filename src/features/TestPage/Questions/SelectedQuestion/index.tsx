import React from "react";
import Image from "next/image";
interface SelectedQuestionProps {
  currentQuestionIndex: number;
  questions: any; // Assuming there is a type/interface named Question
  showCorrectAnswer: boolean;
  userAnswers: any; // Assuming userAnswers is an array of strings
  handleAnswer: (option: string) => void;
  goToNextQuestion: () => void;
  correctCount: number;
  wrongCount: number;
  currentQuestion?: any;
  selectedAnswers?: any;
  correctAnswers?: any;
  quizCompleted?: boolean;
}

const SelectedQuestion: React.FC<SelectedQuestionProps> = ({
  currentQuestionIndex,
  questions,
  showCorrectAnswer,
  userAnswers,
  handleAnswer,
  goToNextQuestion,
  correctCount,
  wrongCount,
  currentQuestion,
  selectedAnswers,
  correctAnswers,
  quizCompleted,
}) => (
  <div className="w-2/3">
    {/* <h2 className="text-2xl font-bold mb-4">Selected Question {currentQuestionIndex + 1}</h2> */}
    {!quizCompleted ? (
      <>
        <p className="text-[18px] font-medium leading-[18px]">
          {currentQuestion?.attributes?.question}
        </p>
        <div className="my-[40px] flex flex-col gap-[20px]">
          {currentQuestion?.attributes?.answer.map(
            (answer: any, index: number) => (
              <div key={index} className="flex items-center">
                <label
                  htmlFor={`option-${index}`}
                  className={`border-1 h-[56px] flex-1 rounded-[8px] border border-[#EAECF0] p-[10px] `}
                >
                  <input
                    type="checkbox"
                    id={`option-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-purple-600 focus:ring-2 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-purple-600"
                    checked={selectedAnswers[currentQuestionIndex]?.includes(
                      answer.answer
                    )}
                    onChange={() => handleAnswer(answer.answer)}
                    disabled={
                      correctAnswers.length > 0 &&
                      selectedAnswers[currentQuestionIndex]?.length >=
                        correctAnswers.length
                    }
                  />
                  {answer.answer}
                </label>
              </div>
            )
          )}
        </div>
      </>
    ) : (
      <div>
        <div className="flex gap-[20px]">
          <div className="bg-white p-[30px] shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.08)]">
            <div className="flex flex-col gap-[10px] text-center">
              <Image
                width={40}
                height={40}
                className=""
                src={"/svg/wrong.svg"}
                alt="wrong"
              />
              <h4 className="text-[22px] font-bold leading-[27px] ">
                {wrongCount}
              </h4>
              <p className="text-[14px] font-semibold leading-[17px] ">
                Wrong Answered{" "}
              </p>
            </div>
          </div>
          <div className="bg-white p-[30px] shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.08)]">
            <div className="flex flex-col gap-[10px] text-center">
              <Image
                width={40}
                height={40}
                className=""
                src={"/svg/correct.svg"}
                alt="wrong"
              />
              <h4 className="text-[22px] font-bold leading-[27px] ">
                {correctCount}
              </h4>
              <p className="text-[14px] font-semibold leading-[17px] ">
                Correct Answered{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default SelectedQuestion;
