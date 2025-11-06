import { createContext, useState, type ReactNode } from 'react';
import { LoadingApp } from '../components/Renders/Loadings/AppLoading';

export interface LoadingAppContextType {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const LoadingAppContext = createContext<LoadingAppContextType>({
  isLoading: true,
  setIsLoading: (_: boolean) => {},
});

export const LoadingAppProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <LoadingAppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <LoadingApp />}
    </LoadingAppContext.Provider>
  );
};
