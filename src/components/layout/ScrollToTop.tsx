import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Don't scroll to top if the user is navigating back (POP) 
    // or if the URL contains a hash (hash scrolling handles it)
    if (navType !== "POP" && !hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType, hash]);

  return null;
}
