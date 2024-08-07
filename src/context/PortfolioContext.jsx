import { createContext, useState } from "react";

export const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const [displayProject, setDisplayProject] = useState();

  const contextValue = {
    displayProject,
    setDisplayProject,
  };

  <PortfolioContext.Provider value={contextValue}>
    {children}
  </PortfolioContext.Provider>;
};

export default PortfolioContextProvider;
