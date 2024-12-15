import { createContext, useState } from "react";

interface NumberContextProps {
  num: number[];
  addNumber: (n: number) => void;
}

interface NumberProviderProps {
  children: React.ReactNode;
}

export const NumberContext = createContext<NumberContextProps | undefined>(
  undefined
);

export const NumberProvider: React.FC<NumberProviderProps> = ({ children }) => {
  const [num, setNum] = useState<number[]>([]);

  const addNumber = (n: number) => {
    setNum((prev) => [...prev, n]);
  };

  return (
    <NumberContext.Provider value={{ num, addNumber }}>
      {children}
    </NumberContext.Provider>
  );
};
