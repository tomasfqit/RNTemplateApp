import {
  KeyboardTypeOptions,
  LayoutChangeEvent,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
} from 'react-native';
import { COLORS } from '../../constants';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: 'email' | 'password' | 'name' | 'tel' | 'username' | 'off';
  autoCorrect?: boolean;
  autoFocus?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onEndEditing?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  returnKeyType,
  onSubmitEditing,
  onBlur,
  onFocus,
  onEndEditing,
  onLayout,
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      onFocus={onFocus}
      onEndEditing={onEndEditing}
      onLayout={onLayout}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLORS.gray[100],
  },
});
