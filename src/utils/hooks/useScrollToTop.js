import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// Component that attaches scroll to top hanler on router change
// renders nothing, just attaches side effects
const useScrollToTop = () => {
  // this assumes that current router state is accessed via hook
  // but it does not matter, pathname and search (or that ever) may come from props, context, etc.
  const { pathname, search } = useLocation();
  const ref = useRef();

  // just run the effect on pathname and/or search change
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  // renders nothing, since nothing is needed
  return ref;
};

export default useScrollToTop;
