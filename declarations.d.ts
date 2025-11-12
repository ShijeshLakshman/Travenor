declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  import {ViewProps} from 'react-native';
  const content: React.FC<SvgProps, ViewProps>;
  export default content;
}
