import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Staggered timeouts to handle React 18 concurrent rendering / layout updates and browser scroll-restoration
    const t1 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);
    
    const t2 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    const t3 = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
