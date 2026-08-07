import { useCallback } from 'react';

/**
 * Custom hook to smoothly scroll to any element ID on the page.
 */
export function useScrollTo() {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
}
