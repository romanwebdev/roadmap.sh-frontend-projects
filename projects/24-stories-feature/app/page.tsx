'use client';

import ProgressBarsLine from '@/components/ProgressBarsLine';
import StoriesLine from '@/components/StoriesLine';
import StoriesSwiper from '@/components/StoriesSwiper';
import { useCleanupExpiredItems } from '@/hooks/use-cleanup-expired-stories';

export default function Home() {
  useCleanupExpiredItems();

  return (
    <div className="flex flex-1 justify-center">
      <div className="max-w-480 w-full border-x border-gray-200 shadow-lg shadow-blue-500/50">
        <h1 className="text-center my-6 text-3xl font-bold text-blue-900">
          24h Story Feature App
        </h1>
        <StoriesLine />
        <ProgressBarsLine />
        <StoriesSwiper />
      </div>
    </div>
  );
}
