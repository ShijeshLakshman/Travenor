import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import COLORS from '../constants/colors';
import fonts from '@constants/fonts';

interface Style {
  subContainer: ViewStyle;
  lineIndicator: ViewStyle;
  tab: ViewStyle;
  iconStyle: ImageStyle;
  tabText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  tab: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    height: 90,
    elevation: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: -2, width: 0 },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineIndicator: {
    width: 55,
    height: 2,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  tabText: {
    fontFamily: fonts.RegularFont,
    fontSize: 12,
    lineHeight: 16,
    color: COLORS.greyShade2,
    marginTop: 8,
  },
});

export default styles;
