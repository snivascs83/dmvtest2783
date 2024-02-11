import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../BreadCrumb";
import QuestionList from "./Questions/QuestionList";
import SelectedQuestion from "./Questions/SelectedQuestion";
import axiosApiClient from "../../../utils/axiosClientLibs";
import { TEST_PAGE } from "../../../utils/apiUrls";
import { useRouter } from "next/router";
import { ITestPage } from "./interfaces";

const TestPage = () => {
  const breadCrumbs = useMemo(() => {
    const list = [
      { label: "Home", href: "/", active: false },
      { label: "Alabama", href: "/alabama", active: false },
      { label: "Test Page", href: "/test", active: true },
    ];
    return list;
  }, []);
  interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
  }
  const [questions] = useState<Question[]>([
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Paris", "Berlin", "London"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      text: "How many continents are there?",
      options: ["5", "9", "7"],
      correctAnswer: "7",
    },
    {
      id: 3,
      text: "How many continents are there?",
      options: ["5", "10", "7"],
      correctAnswer: "7",
    },
    {
      id: 4,
      text: "How many continents are there?",
      options: ["5", "3", "7"],
      correctAnswer: "7",
    },
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Paris", "Berlin", "London"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      text: "How many continents are there?",
      options: ["5", "9", "7"],
      correctAnswer: "7",
    },
    {
      id: 3,
      text: "How many continents are there?",
      options: ["5", "10", "7"],
      correctAnswer: "7",
    },
    {
      id: 4,
      text: "How many continents are there?",
      options: ["5", "3", "7"],
      correctAnswer: "7",
    },
    {
      id: 1,
      text: "What is the capital of France?",
      options: ["Paris", "Berlin", "London"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      text: "How many continents are there?",
      options: ["5", "9", "7"],
      correctAnswer: "7",
    },
    {
      id: 3,
      text: "How many continents are there?",
      options: ["5", "10", "7"],
      correctAnswer: "7",
    },
    {
      id: 4,
      text: "How many continents are there?",
      options: ["5", "3", "7"],
      correctAnswer: "7",
    },
    {
      id: 4,
      text: "How many continents are there?",
      options: ["5", "3", "7"],
      correctAnswer: "7",
    },
    // Add more questions as needed
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const router = useRouter();
  const handleAnswer = (selectedAnswer: string) => {
    console.log({ selectedAnswer: selectedAnswer });
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: selectedAnswer,
    }));
  };
  const [testData, setTestData] = useState<ITestPage>();
  const fetchData = async () => {
    try {
      const response = await axiosApiClient.get(
        `${TEST_PAGE}?populate[0]=questions.answer&populate[1]=category&category.id=1&states.id=2&filters[id]=3`
      );
      setTestData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log({ testData: testData });
  useEffect(() => {
    fetchData();
  }, [router.isReady]);
  const goToNextQuestion = () => {
    setShowCorrectAnswer(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const calculateScore = () => {
    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer === question.correctAnswer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    return { correctCount, wrongCount };
  };

  const { correctCount, wrongCount } = calculateScore();
  return (
    <div className="mx-[82px] my-[60px]">
      <Breadcrumb
        className="flex-wrap gap-y-[8px] text-[16px] font-medium "
        itemClassName="text-[#FDB022] leading-[24px]"
        seperatorClassName="mx-[5px] no-underline"
        itemActiveClassName="text-[#000925]"
        items={breadCrumbs}
        seperator="/"
      />

      <h5 className="my-[30px] text-[36px] font-medium leading-[24px] text-[#000925]">
        2023 Alberta Penalties and Restrictions | DMV
      </h5>

      <div className="grid grid-cols-3 gap-[30px]">
        <div className="col-span-1">
          <div className="flex flex-row ">
            <div className="flex flex-1 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#4942BB"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[14px] font-semibold leading-[24px] text-[#6941C6]">
                All Tests
              </span>
            </div>
            <div className="border-1 flex h-[36px] w-[120px] flex-1 items-center justify-center gap-[10px] rounded-[8px] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_725_3408)">
                  <path
                    d="M19.4168 3.33331V8.33332M19.4168 8.33332H14.4168M19.4168 8.33332L15.5502 4.69998C14.6545 3.80391 13.5465 3.14932 12.3295 2.79729C11.1125 2.44527 9.82608 2.40727 8.5904 2.68686C7.35472 2.96645 6.21 3.55451 5.26305 4.39616C4.31611 5.23782 3.5978 6.30564 3.17516 7.49998M1.0835 16.6666V11.6666M1.0835 11.6666H6.0835M1.0835 11.6666L4.95016 15.3C5.84579 16.1961 6.95381 16.8506 8.17084 17.2027C9.38787 17.5547 10.6742 17.5927 11.9099 17.3131C13.1456 17.0335 14.2903 16.4455 15.2373 15.6038C16.1842 14.7621 16.9025 13.6943 17.3252 12.5"
                    stroke="black"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_725_3408">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.25)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[14px] font-semibold leading-[24px] text-[#344054]">
                Restart
              </span>
            </div>
          </div>
          <div className="my-[20px]">
            <h4 className="text-[20px] font-semibold leading-[24px] text-[#000925]">
              Car Test 1
            </h4>
          </div>
          <div className="my-[20px]">
            <h3 className="text-[20px] font-normal leading-[30px] text-[#000925]">
              Questions Attempted
            </h3>
          </div>
          <QuestionList
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            userAnswers={userAnswers as any}
          />
        </div>
        <div className="relative col-span-2">
          <SelectedQuestion
            wrongCount={wrongCount}
            correctCount={correctCount}
            goToNextQuestion={goToNextQuestion}
            handleAnswer={handleAnswer}
            userAnswers={userAnswers}
            currentQuestionIndex={currentQuestionIndex}
            questions={questions}
            showCorrectAnswer={showCorrectAnswer}
          />
          <div className="absolute bottom-0 right-0">
            <button
              className="border-1 ml-auto mt-4 flex h-[36px] items-center justify-end gap-[10px] rounded-[8px] border border-[#FDB022] bg-[#FFFAEB] px-[20px] text-[#000000]"
              onClick={goToNextQuestion}
              disabled={!userAnswers[currentQuestionIndex]}
            >
              <span>Next</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1665 10.0003H15.8332M15.8332 10.0003L9.99984 4.16699M15.8332 10.0003L9.99984 15.8337"
                  stroke="black"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestPage;
