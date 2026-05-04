'use client';

import Image from 'next/image';
import { IStory } from '@/types';

export default function Story({ story }: { story: IStory }) {
  return (
    <div className="flex justify-center items-center p-4">
      <Image
        width={0}
        height={0}
        src={story.base64}
        alt="Selected Story"
        className="w-auto h-auto max-w-full rounded-lg shadow-lg"
      />
    </div>
  );
}
