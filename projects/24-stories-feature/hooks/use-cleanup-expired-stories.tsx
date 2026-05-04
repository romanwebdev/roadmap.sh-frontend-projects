import { CHECK_INTERVAL, EXPIRATION_TIME } from '@/constants';
import { getStoriesFromLS, setLocalStorage } from '@/helpers';
import { useStories } from '@/store';
import { useEffect } from 'react';

export function useCleanupExpiredItems() {
  const { setStories, setActiveIndex } = useStories();

  useEffect(() => {
    const cleanup = () => {
      const now = Date.now();
      const stories = getStoriesFromLS();

      const filtered = stories.filter(
        (story) => now - story.createdAt < EXPIRATION_TIME,
      );

      if (filtered.length !== stories.length) {
        setLocalStorage(filtered);
        setStories(filtered);
        setActiveIndex(0);
      }
    };

    cleanup();

    const interval = setInterval(cleanup, CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, [setStories, setActiveIndex]);
}
