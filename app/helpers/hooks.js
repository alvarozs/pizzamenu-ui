import { useEffect } from 'react';

export const useFetching = (fetchActionCreator, args) => {
  useEffect(() => {
    fetchActionCreator(args);
  }, []);
};
