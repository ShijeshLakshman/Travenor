import React from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styling from './styles';
import COLORS from '@constants/colors';

export type Props = {
  statusbar?: any;
  insetsBottom?: boolean;
  barStyle?: any;
  children?: any;
  backgroundColor?: string;
  containerStyle?: any;
};

export type StatusBarProps = {
  backgroundColor?: string;
  statusBarStyle?: any;
};

const CustomStatusBar: React.FC<StatusBarProps> = ({
  backgroundColor,
  statusBarStyle,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={statusBarStyle}
      />
    </View>
  );
};

const SafeAreaWrapper: React.FC<Props> = ({
  statusbar,
  insetsBottom,
  barStyle,
  children,
  backgroundColor,
  containerStyle,
}) => {
  const insets = useSafeAreaInsets();
  const styles = styling(backgroundColor, insets, insetsBottom);

  return (
    <>
      <CustomStatusBar
        backgroundColor={statusbar ?? COLORS.white}
        statusBarStyle={barStyle ?? 'dark-content'}
      />
      <View style={[styles.container, containerStyle]}>{children}</View>
    </>
  );
};

export default SafeAreaWrapper;
