import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootNavigation from './src/navigation/RootNavigation'
import { store } from './src/redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    )
  }
}
