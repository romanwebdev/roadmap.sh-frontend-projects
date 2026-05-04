import { STORAGE_KEY } from '@/constants';
import { IStory } from '@/types';

export function getStoriesFromLS(): IStory[] {
  const data = localStorage.getItem(STORAGE_KEY);

  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function setLocalStorage(arr: IStory[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

export function addStoryToLS(value: IStory): void {
  const current = getStoriesFromLS();

  if (!current.includes(value)) {
    current.push(value);
    setLocalStorage(current);
  }
}
