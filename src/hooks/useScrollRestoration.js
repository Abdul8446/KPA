import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef({});
  const prevLocation = useRef(location.pathname);

  // Save scroll position when leaving a page
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[prevLocation.current] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll restoration
  useEffect(() => {
    if (location.pathname !== prevLocation.current) {
      if (navigationType === 'POP') {
        // Browser back/forward - restore position
        const savedPosition = scrollPositions.current[location.pathname];
        if (savedPosition !== undefined) {
          window.scrollTo(0, savedPosition);
        }
      } else {
        // New navigation - scroll to top
        window.scrollTo(0, 0);
      }
      prevLocation.current = location.pathname;
    }
  }, [location, navigationType]);
}

export default useScrollRestoration;