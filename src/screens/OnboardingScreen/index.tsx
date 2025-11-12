import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ListRenderItem,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';
import useOnBoardHook from './useOnBoardHook';

import Pagination from './Pagination';
import { onboardingData } from '@constants/constants';
import CommonButton from '@components/Common/CommonButton';

export type Props = {
  id: string;
  titleImage: ImageSourcePropType;
  desc: string;
  icon: ImageSourcePropType;
};

const CarousalComponent = () => {
  const { onNextPress, viewConfig, scrollX, slideRef, onScroll } =
    useOnBoardHook();

  const renderItem: ListRenderItem<Props> = ({ item }) => {
    return (
      <View style={styles.onBoardContainer}>
        <Image source={item.icon} style={styles.imageWrap} resizeMode="cover" />
        <Image
          source={item.titleImage}
          style={styles.titleImage}
          resizeMode="contain"
        />
        <View style={styles.textWrap}>
          <Text style={styles.titleTxt}>{item?.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingData}
        keyExtractor={item => item.id.toString()}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={onScroll}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <View style={styles.footer}>
        <Pagination data={onboardingData} scrollX={scrollX} />
        <Pressable onPress={() => onNextPress()}>
          <CommonButton />
        </Pressable>
      </View>
    </View>
  );
};

export default CarousalComponent;
