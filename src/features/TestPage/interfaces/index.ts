export interface IAnswer {
  id: number;
  answer: string;
  correctAnswer: boolean;
}

export interface IQuestion {
  id: number;
  attributes: {
    question: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    status: string;
    imageUrl: string | null;
    videoUrl: string | null;
    explanation: string | null;
    description: string | null;
    time: number | null;
    points: number | null;
    answer: IAnswer[];
  };
}

export interface IPracticeTest {
  id: number;
  attributes: {
    title: string;
    description: string;
    imageUrl: string;
    time: number;
    points: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    explanation: string;
    isFree: boolean;
    isPremium: boolean;
    questions: {
      data: IQuestion[];
    };
  };
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ITestPage {
  data: IPracticeTest[];
  meta: {
    pagination: IPagination;
  };
}
