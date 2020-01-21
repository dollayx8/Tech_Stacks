import React from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import LibraryList from './src/components/LibraryList';


const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
};

export default App;
