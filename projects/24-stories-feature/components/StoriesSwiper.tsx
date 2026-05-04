'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import Story from '@/components/Story';
import { useStories } from '@/store';
import 'swiper/css';

export default function StoriesSwiper() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const { stories, activeIndex, setActiveIndex } = useStories();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(event) => {
        setActiveIndex(event.activeIndex);
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {stories.map((story) => (
        <SwiperSlide key={story.createdAt}>
          <Story story={story} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
