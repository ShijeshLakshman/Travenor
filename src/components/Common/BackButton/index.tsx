import React from 'react';
import { Pressable } from 'react-native';
import styles from './styles';

import Icons from '@constants/icons';

type BackButtonProps = {
  onPress: () => {};
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <Icons.BackArrow />
    </Pressable>
  );
};

export default BackButton;
