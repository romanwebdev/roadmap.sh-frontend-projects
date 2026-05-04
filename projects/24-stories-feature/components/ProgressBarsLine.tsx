import { useEffect, useState } from 'react';
import { PROGRESS_BAR_DURATION } from '@/constants';
import { useStories } from '@/store';

export default function ProgressBarsLine() {
  const [progress, setProgress] = useState(0);
  const { stories, activeIndex, setActiveIndex } = useStories();

  useEffect(() => {
    if (stories.length <= 1) return;

    let start: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const percent = Math.min((elapsed / PROGRESS_BAR_DURATION) * 100, 100);
      setProgress(percent);

      if (elapsed < PROGRESS_BAR_DURATION) {
        raf = requestAnimationFrame(animate);
      } else {
        const newIndex = (activeIndex + 1) % stories.length;
        setActiveIndex(newIndex);
        setProgress(0);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [activeIndex, setActiveIndex, stories, stories.length]);

  return (
    <div className="flex gap-1 w-full px-4 py-2">
      {stories.map((_, index) => {
        let width = 0;

        if (index < activeIndex) width = 100;
        else if (index === activeIndex) width = progress;

        return (
          <div
            key={index}
            className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-linear-to-r from-indigo-500 to-blue-500"
              style={{ width: `${width}%` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
