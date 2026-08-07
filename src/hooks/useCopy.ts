import { useState, useCallback } from 'react';

/**
 * Custom hook to copy text to clipboard and manage brief active state indicator.
 */
export function useCopy(timeoutMs = 2200) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = useCallback(
    (text: string, fieldIdentifier: string) => {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldIdentifier);
      setTimeout(() => {
        setCopiedField(null);
      }, timeoutMs);
    },
    [timeoutMs]
  );

  return { copiedField, copyToClipboard };
}
