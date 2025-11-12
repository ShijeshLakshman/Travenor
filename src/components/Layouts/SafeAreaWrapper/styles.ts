import { StyleSheet, Platform } from 'react-native';

import COLORS from '@constants/colors';

const styling = (bg = COLORS.white, insets: any, insetsBottom: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
      paddingBottom: insetsBottom
        ? Platform.OS === 'ios'
          ? insets.bottom
          : 0
        : 0,
    },
    tostWrap: {
      position: 'absolute',
      bottom: 15,
      left: 0,
      right: 0,
    },
  });

export default styling;
