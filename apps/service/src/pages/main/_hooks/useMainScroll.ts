import { useEffect, useState, useRef } from "react";

const useMainScroll = () => {
  const [isFold, setIsFold] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsFold(true);
      } else {
        setIsFold(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isFold };
};

export default useMainScroll;
