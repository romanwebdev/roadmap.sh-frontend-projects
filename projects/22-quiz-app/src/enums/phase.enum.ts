export const Phase = {
  Home: 'Home',
  Quiz: 'Quiz',
  Result: 'Result',
} as const;
export type PhaseType = (typeof Phase)[keyof typeof Phase];
