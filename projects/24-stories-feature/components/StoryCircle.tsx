'use client';

import Image from 'next/image';
import { useStories } from '@/store';
import { IStory } from '@/types';

type StoryCircleProps = {
  story: IStory;
  index: number;
};

export default function StoryCircle({ story, index }: StoryCircleProps) {
  const { setActiveIndex, activeIndex } = useStories();

  return (
    <button
      className={`place-items-center rounded-full h-18 w-18 cursor-pointer border-4 shadow-lg transition-all duration-200 hover:scale-105 ${
        index === activeIndex
          ? 'border-indigo-500 shadow-indigo-200'
          : 'border-blue-300 hover:border-indigo-400'
      }`}
      onClick={() => setActiveIndex(index)}
    >
      <Image
        height={64}
        width={64}
        src={story.base64}
        alt="Story Image"
        className="rounded-full h-16 w-16 object-cover"
      />
    </button>
  );
}
