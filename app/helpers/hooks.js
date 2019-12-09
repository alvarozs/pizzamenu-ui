import { useEffect } from 'react';

export const useFetching = (fetchActionCreator) => {
  useEffect(() => {
    fetchActionCreator();
  }, []);
};
