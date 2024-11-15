import React, { ReactNode, createContext, useContext, useState } from "react";

type SpecificGameProps = {
  specificGame: string | null;
  setSpecificGame: React.Dispatch<React.SetStateAction<string | null>>;
};

const SpecificGameContext = createContext<SpecificGameProps | undefined>(
  undefined
);

export const SpecificGameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [specificGame, setSpecificGame] = useState<string | null>("Sports");

  return (
    <SpecificGameContext.Provider value={{ specificGame, setSpecificGame }}>
      {children}
    </SpecificGameContext.Provider>
  );
};

export const useSpecificGameContext = () => {
  const context = useContext(SpecificGameContext);

  if (!context) {
    throw new Error(
      "useSpecificGameContext must be used within a SpecificGameProvider"
    );
  }

  return context;
};
