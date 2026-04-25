import { create } from 'zustand';
import {
  DEFAULT_ANSWER_INDEX,
  DEFAULT_QUESTION_INDEX,
  DEFAULT_SCORE,
} from '../constants';

export interface QuizStore {
  score: number;
  userAnswers: string[];
  answerIndex: number;
  questionIndex: number;

  // Actions
  incrementScore: () => void;
  decrementScore: () => void;
  addUserAnswer: (answers: string) => void;
  addAnswerIndex: (index: number) => void;
  incrementQuestionIndex: () => void;
  restart: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  // Initial state
  score: DEFAULT_SCORE,
  userAnswers: [],
  answerIndex: DEFAULT_ANSWER_INDEX,
  questionIndex: DEFAULT_QUESTION_INDEX,

  // Actions
  incrementScore: () =>
    set((state) => {
      return { score: state.score + 1 };
    }),

  decrementScore: () =>
    set((state) => {
      if (state.score > 0) return { score: state.score - 1 };
      return state;
    }),

  addUserAnswer: (answer) =>
    set((state) => ({
      userAnswers: [...state.userAnswers, answer],
    })),

  addAnswerIndex: (index) =>
    set(() => ({
      answerIndex: index,
    })),

  incrementQuestionIndex: () =>
    set((state) => ({
      questionIndex: state.questionIndex + 1,
    })),

  restart: () =>
    set({
      score: DEFAULT_SCORE,
      userAnswers: [],
      answerIndex: DEFAULT_ANSWER_INDEX,
      questionIndex: DEFAULT_QUESTION_INDEX,
    }),
}));
