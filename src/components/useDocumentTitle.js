import { useRef, useEffect } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const previousTitle = defaultTitle.current;
    return () => {
      if (!prevailOnUnmount) {
        document.title = previousTitle;
      }
    };
  }, [prevailOnUnmount]);
}

export default useDocumentTitle;
