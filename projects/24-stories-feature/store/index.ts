import { IStory } from '@/types';
import { create } from 'zustand';

type StoriesStore = {
  stories: IStory[];
  activeIndex: number;
  addStory: (story: IStory) => void;
  setStories: (story: IStory[]) => void;
  setActiveIndex: (activeIndex: number) => void;
};

export const useStories = create<StoriesStore>((set) => ({
  stories: [],
  activeIndex: 0,
  addStory: (story: IStory) =>
    set((state) => ({ stories: [...state.stories, story] })),
  setStories: (stories: IStory[]) => set(() => ({ stories })),
  setActiveIndex: (activeIndex: number) => set(() => ({ activeIndex })),
}));
