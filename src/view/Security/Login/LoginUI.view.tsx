import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../components/UI/Button';
import { Input } from '../../../components/UI/Input';
import { ILoginUIHook } from './LoginUI.hook';

export const LoginUIView = ({ form, handleChangeForm, handleLogin }: ILoginUIHook) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Input
        placeholder="Email"
        value={form?.email}
        onChangeText={text => handleChangeForm('email', text)}
      />
      <Input
        placeholder="Password"
        value={form?.password}
        onChangeText={text => handleChangeForm('password', text)}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!form?.email || !form?.password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
