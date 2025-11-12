import { Dimensions } from 'react-native';
import images from './images';

// import svgIcons from './svgIcons';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const responseHeight = (value: number) => {
  return (screenHeight / 812) * value;
};

export const responseWidth = (value: number) => {
  return (screenWidth / 375) * value;
};

export const onboardingData = [
  {
    id: '0',
    titleImage: images.desc1,
    desc: 'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
    icon: images.onboarding1,
  },
  {
    id: '1',
    titleImage: images.desc2,
    desc: 'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    icon: images.onboarding2,
  },
  {
    id: '2',
    titleImage: images.desc3,
    desc: 'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    icon: images.onboarding3,
  },
];
