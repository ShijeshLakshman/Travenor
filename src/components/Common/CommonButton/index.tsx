import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

const CommonButton = () => {
  return (
    <Pressable style={styles.wrapper}>
      <Text style={styles.buttonText}>Next</Text>
    </Pressable>
  );
};

export default CommonButton;
