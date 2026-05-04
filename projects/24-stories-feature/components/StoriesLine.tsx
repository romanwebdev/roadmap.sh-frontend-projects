'use client';

import { useEffect } from 'react';
import { useStories } from '@/store';
import AddStoryButton from './AddStoryButton';
import StoryCircle from './StoryCircle';
import { getStoriesFromLS } from '@/helpers';

export default function StoriesLine() {
  const { stories, setStories } = useStories();

  useEffect(() => {
    const stories = getStoriesFromLS();

    if (stories.length) {
      setStories(stories);
    }
  }, [setStories]);

  return (
    <div className="flex overflow-x-auto p-4 gap-x-3 *:shrink-0">
      <AddStoryButton />
      {stories.map((story, index) => (
        <StoryCircle key={story.createdAt} story={story} index={index} />
      ))}
    </div>
  );
}
