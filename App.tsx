import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Container } from './src/components/Renders/Container/Container';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/navigation/AppRouter';

function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <NavigationContainer>
        <Container>
          <AppRouter />
        </Container>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
