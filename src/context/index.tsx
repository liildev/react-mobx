import { RootStore } from "../store";
import { FC, PropsWithChildren, createContext, useContext } from "react";

type RootStateContextValue = {
  rootStore: RootStore;
};

const RootStateContext = createContext({} as RootStateContextValue);

const rootStore = new RootStore();

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider value={{ rootStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => useContext(RootStateContext);
