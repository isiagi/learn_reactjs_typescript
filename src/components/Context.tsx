import { FC, createContext } from 'react';

interface ContextInterface {
  name: string;
  age: number;
  contry: string;
}

interface Props {}

export const context = createContext<ContextInterface | null>(null);

export const Context: FC<Props> = (props) => {
  const contextValue: ContextInterface = {
    name: 'isiagi',
    age: 25,
    contry: 'uganda',
  };
  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};
