import React, { createContext, useContext, useState } from "react";
import SplashSwiper from "./SplashSwiper";

const SplashContext = createContext({
  showSplash: () => {},
});

export const useSplash = () => useContext(SplashContext);

export const SPLASH_DURATION = 2000;

export const SplashProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSplashVisible, setIsSplashVisible] = useState(false);

  const showSplash = () => {
    setIsSplashVisible(true);

    setTimeout(() => {
      setIsSplashVisible(false);
    }, SPLASH_DURATION);
  };

  return (
    <SplashContext.Provider value={{ showSplash }}>
      {isSplashVisible && <SplashSwiper />}
      {children}
    </SplashContext.Provider>
  );
};
