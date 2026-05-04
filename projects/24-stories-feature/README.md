# 24hr Story Feature

A story viewing app where users can add images via an upload button, store them in local storage, and see them appear in the story list. Each story plays automatically for a few seconds with its own progress indicator, and stories can be changed by swiping.

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
cd roadmap.sh-frontend-projects/projects/24-stories-feature
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
http://localhost:3000
```

## Technologies

HTML, Tailwind CSS, TypeScript, Next.js, npm

## Requirements

- [x] There will be a list of stories at the top and a plus button
- [x] Clicking the plus button will allow user to upload an image which will be converted to base64 and stored in local storage
- [x] The image will be displayed in the list of stories
- [x] The image will be removed after 24 hours
- [x] Clicking a story will show it for 3 seconds and then move the next story
- [x] User can also switch stories by swiping
- [x] Progress bar for active story fills up in 3 seconds
- [x] Each story will have separate progress bar

## Link

[roadmap.sh](https://roadmap.sh/projects/stories-feature)
