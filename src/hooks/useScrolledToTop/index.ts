import { useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce';

const useScrolledToTop = () => {
  const [isScrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const onScroll = throttle(100, () => {
      const isNewScrolledToTop = window.scrollY <= 0;
      if (isScrolledToTop !== isNewScrolledToTop) {
        // Update state and call render only when value is changed
        setScrolledToTop(isNewScrolledToTop);
      }
    });

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      onScroll.cancel();
      window.removeEventListener('scroll', onScroll);
    };
  }, [isScrolledToTop]);

  return isScrolledToTop;
};

export default useScrolledToTop;
