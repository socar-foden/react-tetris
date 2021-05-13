import { useEffect } from "react";

const useRAF = (rAFId: number, next: FrameRequestCallback): void => {
  useEffect(() => {
    rAFId = requestAnimationFrame(next);

    return () => {
      cancelAnimationFrame(rAFId);
    };
  }, []);
};

export default useRAF;
