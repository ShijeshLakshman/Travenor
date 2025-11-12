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
    title: 'Get new knowledge',
    icon: images.onboarding1,
  },
  {
    id: '1',
    title: 'Take time for yourself',
    icon: images.onboarding2,
  },
  {
    id: '2',
    title: 'Do what you love',
    icon: images.onboarding3,
  },
];
