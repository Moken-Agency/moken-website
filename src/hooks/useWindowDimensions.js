import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...windowDimensions,
    isMobile: windowDimensions.width < 600,
    isMiddleResolution: windowDimensions.width > 600 && windowDimensions.width < 1450,
    isMiddleBiggest: windowDimensions.width > 900 && windowDimensions.width < 1450,
    isMiddleSmallest: windowDimensions.width > 601 && windowDimensions.width < 900
  }
}
