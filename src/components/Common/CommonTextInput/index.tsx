import React, { memo } from 'react';
import { View, ViewStyle, TextInput } from 'react-native';
import styles from './styles';

export type TextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  wrapperStyle?: any;
  keyboardType?: any;
  containerStyle?: ViewStyle;
  placeholderColor?: string;
  secureTextEntry?: boolean;
};

const CommonTextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  wrapperStyle,
  keyboardType,
  containerStyle,
  placeholderColor,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.container, wrapperStyle]}>
      <TextInput
        style={[styles.mainBg, containerStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry ?? false}
        keyboardType={keyboardType ?? 'default'}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

export default memo(CommonTextInput);
