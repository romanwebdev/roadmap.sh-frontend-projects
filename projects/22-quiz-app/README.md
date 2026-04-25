# Quiz App

A Quiz App built with React, Typescript, Zustand. The quiz starts with a brief intro and a Start button. Questions appear one at a time as cards with multiple-choice answers. Each question has a 1-minute timer — if time runs out, it skips ahead and deducts 1 point. After selecting an answer, buttons instantly turn green or red, and the correct answer is shown. Correct answers increase your score. At the end, you’ll see your final score and a summary of results.

## Prerequisites

Install [Node.js](https://nodejs.org/)

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

To run the application locally:

1. **Clone or download the repository and navigate to the project directory:**

```sh
cd roadmap.sh-frontend-projects/projects/22-quiz-app
```

2. **Install dependencies:**

```sh
npm install
```

3. **Start the development server:**

```sh
npm run dev
```

4. **Open your browser and visit:**

```
http://localhost:5173
```

## Technologies

HTML, CSS, TypeScript, React, npm, Vite, zustand

## Requirements

- [x] The user will be initially presented with a "start" button and some detail about the quiz
- [x] When the user presses start they're presented with the first multiple choice question.
- [x] The questions are to be presented as cards with the answers being buttons on the card.
- [x] When the user selects an answer, the answer buttons are to turn red or green depending on the result. It should also show what the correct answer was.
- [x] If the user answers correctly, a score is to be incremented.
- [x] At the end of the quiz, the user is presented with a final score and all of the results.
- [x] Optionally add a timer of 1 minute to each question, if user doesn't attempt the question in that time, it should skip to next question and score should be decremented by 1.

## Link

[roadmap.sh](https://roadmap.sh/projects/quiz-app)
