import { StyleSheet } from 'react-native';

import COLORS from '@constants/colors';
import fonts from '@constants/fonts';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.greyShade3,
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.SemiBoldFont,
    fontSize: 16,
    lineHeight: 20,
    color: COLORS.white,
  },
});

export default styles;
