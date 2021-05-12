import { useEffect } from "react";

const useKeyboard = (
  type: keyof DocumentEventMap,
  listener: (this: Document, e: KeyboardEvent) => void
): void => {
  useEffect(() => {
    document.addEventListener(type, listener);

    return () => {
      document.removeEventListener(type, listener);
    };
  }, []);
};

export default useKeyboard;
