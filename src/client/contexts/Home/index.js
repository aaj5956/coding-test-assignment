import { createContext } from 'react';

export const ChoiceContext = createContext({
  choice: '1',
  setChoice: () => {},
});

export const PhotoContext = createContext([]);