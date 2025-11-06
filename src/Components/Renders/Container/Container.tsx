import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export interface IContainerProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    edges?: {
      top?: boolean;
      bottom?: boolean;
      left?: boolean;
      right?: boolean;
    };
}
export const Container = ({ children, style, edges }: IContainerProps) => {
  const insets = useSafeAreaInsets();

  const paddingTop = edges?.top === false ? 0 : insets.top;
  const paddingBottom = edges?.bottom === false ? 0 : insets.bottom;
  const paddingLeft = edges?.left === false ? 0 : insets.left;
  const paddingRight = edges?.right === false ? 0 : insets.right;

  return (
    <View style={[
      styles.container,
      { paddingTop, paddingBottom, paddingLeft, paddingRight },
      style,
    ]}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});