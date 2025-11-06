import { LoadingAppContext } from '../Context/loadingApp.contex';
import { useContext } from 'react';
export const useLoadingApp = () => {
  const { isLoading, setIsLoading } = useContext(LoadingAppContext);
  return { isLoading, setIsLoading };
};
