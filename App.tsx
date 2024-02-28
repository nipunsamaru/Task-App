import React from 'react';
import NavigationProvider from './src/navigation';

import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import {Text, View} from 'react-native';
const App = () => {
  return (
    // <StoreProvider store={store}>
    //   <View>
    //     <Text>Hi</Text>
    //   </View>
    // </StoreProvider>
    <View>
      <Text>Hi</Text>
    </View>
  );
};
export default App;
