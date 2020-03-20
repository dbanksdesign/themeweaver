import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothScroll from '../helpers/smoothScroll';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScroll.scrollToTop();
  }, [pathname]);

  return null;
}
