import COLORS from '@constants/colors';
import { screenWidth } from '@constants/constants';
import fonts from '@constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  onBoardContainer: {
    width: screenWidth,
  },
  imageWrap: {
    height: '68%',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  titleImage: {
    marginTop: 24,
    height: 84,
    width: '100%',
  },
  textWrap: {
    marginTop: 15,
    marginHorizontal: 20,
    paddingBottom: 28,
  },
  titleTxt: {
    fontFamily: fonts.RegularFont,
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.greyShade1,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 16,
    marginBottom: 35,
  },
  skipText: {
    color: COLORS.black,
    // ...FONTS.regular,
    fontSize: 17,
    fontWeight: '400',
    top: 20,
  },
});

export default styles;
