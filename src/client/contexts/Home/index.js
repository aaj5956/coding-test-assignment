import { createContext } from 'react';

export const ChoiceContext = createContext({
  choice: '1',
  setChoice: () => {},
});

export const DelayContext = createContext({
  delay: '0',
  setDelay: () => {},
});

export const PhotoContext = createContext([]);