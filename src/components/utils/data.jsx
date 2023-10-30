import { createContext, useState } from "react";
import url from "../../datas/logements.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(url);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
