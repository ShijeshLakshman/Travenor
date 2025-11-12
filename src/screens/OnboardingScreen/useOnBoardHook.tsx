import { useRef, useState } from 'react';
import { Animated, FlatList } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { onboardingData, screenWidth } from '@constants/constants';

const useOnBoardHook = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const slideRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onScroll = (event: any) => {
    const scrollIndex = Math.round(
      event.nativeEvent.contentOffset.x / screenWidth,
    );
    scrollX.setValue(event.nativeEvent.contentOffset.x);
    setCurrentIndex(scrollIndex);
  };

  const onSkipPress = async () => {
    // await dispatch(setOnBoard(true));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Welcome' }],
      }),
    );
  };

  const onNextPress = async () => {
    if (currentIndex < onboardingData.length - 1) {
      slideRef?.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // await dispatch(setOnBoard(true));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Welcome' }],
        }),
      );
    }
  };

  return {
    onSkipPress,
    onNextPress,
    scrollX,
    viewConfig,
    slideRef,
    onScroll,
  };
};

export default useOnBoardHook;
