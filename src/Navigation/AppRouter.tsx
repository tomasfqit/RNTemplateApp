
import { useAuthStore } from '../store/auth.store';
import { Text, View } from 'react-native';
import StackNavigator from '../navigation/StackNavigator';

const AppRouter = () => {
  const { token } = useAuthStore();

  if (!token) {
    return (<StackNavigator />);
  } else {
    return (
      <View>
        <Text>token is found</Text>
      </View>
    );
  }
};

export default AppRouter;