import { StyleSheet } from 'react-native';

import COLORS from '@constants/colors';
import fonts from '@constants/fonts';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.primary,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: fonts.SemiBoldFont,
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.white,
  },
});

export default styles;
