import { useEffect, useState } from 'react';

const useScrollEvent = () => {
  const [scrollPosition, setSrollPosition] = useState(0);

  useEffect(() => {
    const scrollCallBack = window.addEventListener('scroll', () => {
      setSrollPosition(window.pageYOffset);
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  });

  return scrollPosition !== 0;
};
useScrollEvent.propTypes = {};

export default useScrollEvent;
