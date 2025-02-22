import { useEffect, useState, useRef } from "react";

const useMainNavigation = () => {
  const [isFold, setIsFold] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // const mainFixedComponentsHeight = isFold ? 177 : 410;
      // const mainBoothListHeight = ref.current?.clientHeight || 0;
      // const maxScroll =
      //   mainFixedComponentsHeight + mainBoothListHeight - window.innerHeight;

      // if (currentScrollY > maxScroll) {
      //   window.scrollTo(0, maxScroll);
      //   lastScrollY.current = maxScroll;
      //   return;
      // }

      if (currentScrollY > lastScrollY.current) {
        setIsFold(true);
      } else {
        setIsFold(false);
      }

      // lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isFold;
};

export default useMainNavigation;
