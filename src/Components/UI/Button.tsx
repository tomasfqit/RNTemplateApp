import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export interface IButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({ title, onPress, disabled, loading }: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading && <ActivityIndicator size="small" color="white" />}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.blue[900],
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  disabled: {
    backgroundColor: COLORS.gray[200],
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
