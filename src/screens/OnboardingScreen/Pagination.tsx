import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import COLORS from '@constants/colors';
import { screenWidth } from '@constants/constants';

export type Props = {
  id: number;
  image: React.ReactNode;
  head: React.ReactNode;
  subText: string;
};

const Pagination = ({ data, scrollX }: any) => {
  return (
    <View style={styles.ScrollBar}>
      {data.map((item: Props, index: number) => {
        const inputRange = [
          (index - 1) * screenWidth,
          index * screenWidth,
          (index + 1) * screenWidth,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.ScrollIndicator, { opacity }]}
            key={item.id.toString()}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  ScrollBar: {
    height: 3,
    flexDirection: 'row',
    backgroundColor: COLORS.greyShade2,
    width: 99,
    alignSelf: 'center',
    marginBottom: 16,
  },
  ScrollIndicator: {
    height: 3,
    backgroundColor: COLORS.primary,
    width: 33,
  },
});
