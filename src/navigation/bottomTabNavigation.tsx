/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '@constants/icons';

import HomeScreen from '@screens/HomeScreen';
import CalendarScreen from '@screens/CalendarScreen';
import SearchScreen from '@screens/SearchScreen';
import MessageScreen from '@screens/MessageScreen';
import AccountScreen from '@screens/AccountScreen';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  function MyTabBar(props: any) {
    const { state, navigation } = props;

    return (
      <View style={styles.subContainer}>
        {state.routes.map((route: any, index: number) => {
          let routeName = route.name;
          const isFocused = state.index === index;

          let IconComponent;
          if (route.name === 'Home') {
            IconComponent = isFocused ? Icons.HomeActive : Icons.Home;
          } else if (route.name === 'Calendar') {
            IconComponent = isFocused ? Icons.CalendarActive : Icons.Calendar;
          } else if (route.name === 'Search') {
            IconComponent = Icons.Search;
          } else if (route.name === 'Messages') {
            IconComponent = isFocused ? Icons.ChatActive : Icons.Chat;
          } else {
            IconComponent = Icons.Profile;
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              style={[styles.tab, {}]}
            >
              <IconComponent />
              {route.name !== 'Search' && (
                <Text style={styles.tabText}>{route.name}</Text>
              )}
            </Pressable>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator
      backBehavior={'history'}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      tabBar={(props: any) => <MyTabBar {...props} />}
      initialRouteName={'Home'}
    >
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Calendar'} component={CalendarScreen} />
      <Tab.Screen name={'Search'} component={SearchScreen} />
      <Tab.Screen name={'Messages'} component={MessageScreen} />
      <Tab.Screen name={'Account'} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
