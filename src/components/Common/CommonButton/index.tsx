import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

type ButtonProps = {
  label: string;
  onPress: () => {};
};

const CommonButton: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Text style={styles.buttonText}>{label ?? 'Next'}</Text>
    </Pressable>
  );
};

export default CommonButton;
