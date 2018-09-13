import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Loading from './src/sections/components/loading';
import AppNavigatorWithState from './src/app-navigator-with-state';
type Props = {};
export default class App extends Component<Props> {
  render() {

    return (
      <Provider
        store={store}
      >
        <PersistGate
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}
