'use client';

import { ChangeEvent, useRef } from 'react';
import { convertToBase64, addStoryToLS, resizeImage } from '@/helpers';
import { useStories } from '@/store';

export default function AddStoryButton() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addStory, activeIndex, setActiveIndex } = useStories();

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const base64 = (await convertToBase64(file)) as string;
      const resized = (await resizeImage(base64)) as string;
      const story = { base64: resized, createdAt: Date.now() };
      addStory(story);
      addStoryToLS(story);
      setActiveIndex(activeIndex + 1);
    } catch (error) {
      console.error('Error converting file:', error);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />

      <button
        className="border-2 border-dashed border-blue-400 rounded-full h-16 w-16 hover:bg-indigo-100 hover:border-indigo-500 hover:shadow-md cursor-pointer text-blue-600 text-2xl transition-all duration-200 flex items-center justify-center font-bold"
        onClick={handleClick}
      >
        +
      </button>
    </>
  );
}
