import { useState, useCallback, useRef } from 'react';
import { SNACKBAR_TYPES } from '@/components/Snackbar/types';

export const useSnackbarController = (timeout = 3000) => {
  const [snackbar, setSnackbar] = useState<{ type: SNACKBAR_TYPES; key: string } | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showSnackbar = useCallback((type: SNACKBAR_TYPES) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    setSnackbar({ type, key: new Date().toString() });

    timerRef.current = setTimeout(() => {
      setSnackbar(null);
    }, timeout);
  }, [timeout]);

  return {
    snackbarType: snackbar?.type,
    snackbarKey: snackbar?.key,
    showSnackbar,
  };
};