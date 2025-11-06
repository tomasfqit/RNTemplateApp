
import { useAuthStore } from '../store/auth.store';
import StackNavigator from '../navigation/StackNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppRouter = () => {
  const { token } = useAuthStore();

  if (!token) {
    return (<StackNavigator />);
  } else {
    return (<DrawerNavigator />);
  }
};

export default AppRouter;