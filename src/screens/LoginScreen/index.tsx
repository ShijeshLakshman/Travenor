import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import useLoginHook from './useLoginHook';

import SafeAreaWrapper from '@components/Layouts/SafeAreaWrapper';
import CommonTextInput from '@components/Common/CommonTextInput';

const LoginScreen = () => {
  const { userEmail, setUserEmail, password, setPassword } = useLoginHook();

  return (
    <SafeAreaWrapper>
      <View style={styles.wrapper}>
        <CommonTextInput
          placeholder="Email"
          value={userEmail}
          onChangeText={(text: string) => setUserEmail(text)}
        />
        <CommonTextInput
          placeholder="Password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default LoginScreen;
